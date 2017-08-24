'use strict';

if (module.hot) {
  module.hot.accept();
}

import '../styles/index.scss';

import { 
  app,
  h,
} from 'hyperapp';
import 'whatwg-fetch';

import Header from './components/Header/index.js';
import MainWrapper from './components/MainWrapper/index.js';
import NewProgramForm from './components/NewProgramForm/index.js';

app({
  root: document.getElementById('mount'),

  state: {
    programs: [],
    pricingOptions: [],
    visiblePricingTables: {},
    activeNavId: 1,
    activeSubNav: '',
    mmenuOpen: false,

    addNewProgram: {
      isOpen: false,
      programType: '',
      Name: '',
      onlineScheduling: true,
      capacity: 10,
      tabsProgramIsOn: [],
    },
  },

  events: {
    /**
    On application load, fetch for the data
    */
    loaded: (state, actions) => {
      // fetching for programs
      fetch('https://api.myjson.com/bins/5bdb3')
        .then((res) => res.json())
        .then((programData) => {
          actions.updatePrograms(programData);
        });

      // fetching for pricing options
      fetch('https://api.myjson.com/bins/47axv')
        .then((res) => res.json())
        .then((pricingData) => {
          actions.updatePricingOptions(pricingData);
        });
    },
  },


  actions: {
    /**
      @param {ProgramID} - number as param toggles the boolean
    */
    togglePricingTable: (state, actions, ProgramID) => {
      state.visiblePricingTables[`id${ProgramID}`] = !state.visiblePricingTables[`id${ProgramID}`];

      return state;
    },

    /**
      @param {newPrograms} - array of programs to be added to current programs
    */
    updatePrograms: (state, actions, newPrograms) => {
      state.programs = state.programs.concat(newPrograms);

      return state;
    },

    /**
      @param {newPricingOptions} - array of pricing options to be added to current pricing options
    */
    updatePricingOptions: (state, actions, newPricingOptions) => {
      state.pricingOptions = state.pricingOptions.concat(newPricingOptions);

      return state;
    },


    /**
      @param {newNavId} - id of new nav item

      Updates the current active nav item and resets subnav to use default
    */
    updateMainNav: (state, actions, newNavId) => {
      
      if (state.mmenuOpen) {
        actions.toggleMmenu(false);
      }

      if (newNavId !== state.activeNavId) {
        state.activeNavId = newNavId;
        state.activeSubNav = ''; // reset subnav to use default

        return state;
      }
    },

    /**
      @param {newSubNavItem} - string of current subnav name
    */
    updateSubNav: (state, actions, newSubNavItem) => {
      if (newSubNavItem !== state.activeSubNav) {
        state.activeSubNav = newSubNavItem;

        return state;
      }
    },

    /**
      @param {force} - optional boolean to force menu to be open/close 
    */
    toggleMmenu: (state, actions, force) => {

      if (force !== undefined) {
        state.mmenuOpen = force;
      } else {
        state.mmenuOpen = !state.mmenuOpen;
      }

      return state;
    },


    /**
      @param {force} - optional boolean to force form to be open/close 
    */
    toggleForm: (state, actions, force) => {
      if (force !== undefined) {
        state.addNewProgram.isOpen = force;
      } else {
        state.addNewProgram.isOpen = !state.addNewProgram.isOpen;
      }


      if (!state.addNewProgram.isOpen) {
        actions.resetNewProgramForm();
        // reset scroll position
        document.getElementById('form-container').scrollTop = 0;
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }

      return state;
    },

    resetNewProgramForm: (state, actions) => {
      state.addNewProgram = {
        isOpen: state.addNewProgram.isOpen,
        programType: '',
        Name: '',
        onlineScheduling: true,
        amountOfStudents: 10,
        tabsProgramIsOn: [],
      };

      return state;
    },

    /*
    @param {programID} - id of program to be deleted
    */
    deleteProgram: (state, actions, programID) => {
      var confirmDelete = confirm('Are you sure? There is no undo.');

      if (confirmDelete) {
        var remainingPrograms = state.programs.filter((program) => program.ProgramID !== programID);

        state.programs = remainingPrograms;
        return state;
      }
    },

    /*
    # Adding new program.

    Takes js obejct schema and merges with state for UI schema and merges into state as new object
    */
    addNewProgram: (state, actions) => {

      var nextProgramID = 0;

      state.programs.forEach((program) => {
        if (program.ProgramID > 0) {
          nextProgramID = program.ProgramID;
        }
      });

      var program = {
        "ProgramID": nextProgramID + 1,
        "Name": "",
        "TotalMonthlySales": 0,
        "MonthlyAttendance": 0,
        "Sales": {
          "CurrentYear": [0,0,0,0,0,0],
          "PreviousYear": [0,0,0,0,0,0],
        }
      };

      var newProgram = Object.assign({}, program, state.addNewProgram);

      actions.updatePrograms([newProgram]);
      actions.toggleForm(false);
    },

    newProgram: {
      /**
      @param {programType} - String of program type
      */
      setProgramType: (state, actions, programType) => {
        state.addNewProgram.programType = programType;

        return state;
      },

      /**
      @param {programName} - String of program name
      */
      setProgramName: (state, actions, programName) => {
        state.addNewProgram.Name = programName;

        return state;
      },

      /**
      @param {bool} - boolean on whether to set online scheduling
      */
      setOnlineScheduling: (state, actions, bool) => {
        state.addNewProgram.onlineScheduling = (bool === 'true');

        return state;
      },

      /**
      @param {capacity} - number of default capacity
      */
      setDefaultCapacity: (state, actions, capacity) => {
        state.addNewProgram.capacity = capacity;

        return state;
      },

      /**
        @param {tabName} - Name of tab to be added to array
      */
      addTab: (state, actions, tabName) => {
        state.addNewProgram.tabsProgramIsOn.push(tabName);
        return state;
      },

      /**
        @param {tabName} - Name of tab to be removed from array
      */
      removeTab: (state, actions, tabName) => {
        var indexOfTab = state.addNewProgram.tabsProgramIsOn.indexOf(tabName);
        state.addNewProgram.tabsProgramIsOn.splice(indexOfTab, 1);

        return state;
      },
    },
  },


  view: (state, actions) => {
    return (
      <div class="app" style={{ overflow: state.addNewProgram.isOpen ? 'hidden' : 'auto' }}>
        <Header 
          state={state} 
          actions={actions} 
        />
        <MainWrapper 
          state={state} 
          actions={actions} 
        />
        <NewProgramForm 
          state={state.addNewProgram}
          actions={actions} 
        />
      </div>
    );
  },
});