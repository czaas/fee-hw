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
import Card from './components/Card.js';
import SingleProgram from './components/SingleProgram.js';

app({
  root: document.getElementById('mount'),

  state: {
    programs: [],
    pricingOptions: [],
    visiblePricingTables: [],
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
  },


  view: (state, actions) => (
    <div>
      <Header />
      <aside>
        <div>
          <a>+</a>
          New Program
        </div>
      </aside>
      <main>
        <div class="cards">
          {state.programs.map((program) => (
            <Card 
              program={program} 
              pricingOptions={state.pricingOptions}
              togglePricingTable={actions.togglePricingTable} 
              visiblePricingTables={state.visiblePricingTables} 
            />
          ))}
        </div>
        
        <table>
          <tbody>
            <tr>
              <th>All Programs</th>
              <th>Monthly Sales</th>
              <th>Monthly Attendance</th>
            </tr>
            {state.programs.map((program) => <SingleProgram program={program} />)}
          </tbody>
        </table>
      </main>
    </div>
  ),
});