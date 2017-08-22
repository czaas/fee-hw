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

import Header from './components/Header.js';
import MainWrapper from './components/MainWrapper/index.js';

app({
  root: document.getElementById('mount'),

  state: {
    programs: [],
    pricingOptions: [],
    visiblePricingTables: {},
    activeNavId: 1,
    activeSubNav: '',
    mmenuOpen: false,
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
      if (newNavId !== state.activeNavId) {
        state.activeNavId = newNavId;
        state.activeSubNav = ''; // reset subnav to use default

        actions.toggleMmenu(false);

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
  },


  view: (state, actions) => (
    <div>
      <Header 
        state={state} 
        actions={actions} 
      />
      <MainWrapper 
        state={state} 
        actions={actions} 
      />
    </div>
  ),
});