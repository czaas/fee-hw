import { 
  h,
} from 'hyperapp';


import PRICING_OPTIONS from './../../../assets/_pricing-options--data-sample.js';
// console.log(PRICING_OPTIONS);

const PricingOption = ({ name, sales }) => (
  <tr>
    <td>{name}</td>
    <td>${sales}</td>
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

const Card = (props) => (
  <div>
    <div>
      <h2>Card</h2>
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
            <td>$23,438</td>
            <td><img src={'/assets/spark_line.png'} /></td>
          </tr>
        </tbody>
      </table>
      <div>
        <PricingOptionTable 
          pricingOptions={PRICING_OPTIONS} 
          ProgramID={props.ProgramID} 
          styles={{ display: (props.visiblePricingTables[`id${props.ProgramID}`]) ? 'block' : 'none' }} 
        />
        <p onclick={() => props.togglePricingTable(props.ProgramID)}>{(props.visiblePricingTables[`id${props.ProgramID}`]) ? 'less' : 'more'}</p>
      </div>
    </section>
  </div>
);

export default Card;