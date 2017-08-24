import { 
  h,
} from 'hyperapp';

import Card from './Card.js';
import SingleProgram from './SingleProgram.js';

const MainWrapper = (props) => (
  <div class="main-wrapper">
    <aside class="main-wrapper__aside aside">
        <a class="aside__button" onclick={() => props.actions.toggleForm(true)}><img src={'/assets/plus_icon.png'} /></a>
        New Program
    </aside>
    <main class="main-wrapper__main main">
      <div class="cards">
        {props.state.programs.map((program) => (
          <Card 
            program={program} 
            pricingOptions={props.state.pricingOptions}
            togglePricingTable={props.actions.togglePricingTable} 
            visiblePricingTables={props.state.visiblePricingTables} 
          />
        ))}
      </div>
      <div class="all-programs-wrapper">
        <table class="all-programs">
          <tr>
            <th>All Programs</th>
            <th>Monthly Sales</th>
            <th>Monthly Attendance</th>
          </tr>
          {props.state.programs.map((program) => <SingleProgram togglePricingTable={props.actions.togglePricingTable} state={props.state} program={program} />)}
        </table>
      </div>
    </main>
  </div>
);


export default MainWrapper;