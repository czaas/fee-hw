import { 
  h,
} from 'hyperapp';

import { 
  moneyCommaPlacer,
} from './../util/moneyCommaPlacer.js';

const PricingOption = ({ name, sales }) => (
  <tr>
    <td>{name}</td>
    <td>${moneyCommaPlacer(sales)}</td>
  </tr>
);
const PricingOptionTable = (props) => (
  <table style={props.styles}>
    <tr>
      <th>Price Name</th>
      <th>Current</th>
      <th>1 - Year</th>
    </tr>
    <tr>
      <td colspan="2">
        {props.pricingOptions.map((eachOption) => {
            if (parseInt(props.ProgramID, 10) === eachOption.ProgramID) {
              return <PricingOption name={eachOption.Name} sales={eachOption.Sales} />;
            }
          }
        )}
      </td>
      <td>
        <img src={'/assets/spark_lines.png'} />
      </td>
    </tr>
  </table>
);



/*
# Card

Main component to be exported. 
*/
const Card = (props) => (
  <div>
    <div>
      <h2>{props.program.Name}</h2>
      <img src={'/assets/pencil_icons.png'} />
    </div>
    <p>Sales by month</p>

    <img src={'/assets/graph.png'} />

    <section>
      <table>
        <tbody>
          <tr>
            <th>Total Monthly</th>
            <th>Current</th>
            <th>1 - Year</th>
          </tr>
          <tr>
            <td>Sales</td>
            <td>${moneyCommaPlacer(props.program.TotalMonthlySales)}</td>
            <td><img src={'/assets/spark_line.png'} /></td>
          </tr>
        </tbody>
      </table>
      <div>
        <PricingOptionTable 
          pricingOptions={props.pricingOptions} 
          ProgramID={props.program.ProgramID} 
          styles={{ display: (props.visiblePricingTables[`id${props.program.ProgramID}`]) ? 'block' : 'none' }} 
        />
        <p onclick={() => props.togglePricingTable(props.program.ProgramID)}>{(props.visiblePricingTables[`id${props.program.ProgramID}`]) ? 'less' : 'more'}</p>
      </div>
    </section>
  </div>
);

export default Card;