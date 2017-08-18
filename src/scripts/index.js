'use strict';

if (module.hot) {
  module.hot.accept();
}

import '../styles/index.scss';

import { 
  app,
  h,
} from 'hyperapp';


import Header from './components/Header.js';
import Card from './components/Card.js';


app({
  root: document.getElementById('mount'),

  state: {
    visiblePricingTables: {},
  },

  actions: {
    /**
      @param {ProgramID} - number as param toggles the boolean
    */
    togglePricingTable: (state, actions, data) => {
      state.visiblePricingTables[`id${data}`] = !state.visiblePricingTables[`id${data}`];
      
      return state;
    },
  },

  events: {

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
          <Card ProgramID="100" togglePricingTable={actions.togglePricingTable} visiblePricingTables={state.visiblePricingTables} />
          <Card ProgramID="101" togglePricingTable={actions.togglePricingTable} visiblePricingTables={state.visiblePricingTables} />
          <Card ProgramID="102" togglePricingTable={actions.togglePricingTable} visiblePricingTables={state.visiblePricingTables} />
        </div>
        
        <table>
          <tbody>
            <tr>
              <th>All Programs</th>
              <th>Monthly Sales</th>
              <th>Monthly Attendance</th>
            </tr>
            <tr>
              <td>Open Practice</td>
              <td>$23,438</td>
              <td><img src={'/assets/spark_line.png'} /></td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  ),
});