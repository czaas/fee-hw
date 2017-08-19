import { 
  h,
} from 'hyperapp';

import { 
  commaPlacer,
} from './../util/commaPlacer.js';

const PricingOptionTable = (props) => {
  var currentOptions = props.pricingOptions.filter((eachOption) => eachOption.ProgramID === parseInt(props.ProgramID, 10));

  /*
  Animation calculation happening here:
  CSS: transition: height; overflow: hidden;

  - If visible, multiplies the amount of current options based on the height of each one
  - Else not visible height of component is zero. 
  */
  var currentHeight = { height: (props.isVisible) ? `${(currentOptions.length + 2) * 20}px` : '0' };

  return (
    <div class="card__bottom-sales__table-wrapper" style={currentHeight}>
      <table class={`card__bottom-sales__table`}>
        <tr>
          <th>Price Name</th>
          <th>Current</th>
          <th>1 - Year</th>
        </tr>
        <tr>
          <td colspan="2">
            {currentOptions.map((eachOption) => (
              <tr>
                <td>{eachOption.Name}</td>
                <td>${commaPlacer(eachOption.Sales)}</td>
              </tr>
            ))}
          </td>
          <td>
            <img src={'/assets/spark_lines.png'} />
          </td>
        </tr>
      </table>
    </div>
  );
};



/*
# Card

Main component to be exported. 
*/
const Card = (props) => (
  <div class="card cards__card">
    <div class="card__top">
      <h2 class="card__top__name">{props.program.Name}</h2>
      <div class="card__top__edit" />
    </div>
    <p class="card__graph-sales">Sales by month</p>

    <img class="card__graph" src={'/assets/graph.png'} />

    <section class="card__current-sales">
      <table class="card__current-sales__table">
        <tbody>
          <tr>
            <th>Total Monthly</th>
            <th>Current</th>
            <th>1 - Year</th>
          </tr>
          <tr>
            <th>Sales</th>
            <td>${commaPlacer(props.program.TotalMonthlySales)}</td>
            <td><img src={'/assets/spark_line.png'} /></td>
          </tr>
        </tbody>
      </table>
    </section>
    <section class="card__bottom-sales">
      <PricingOptionTable 
        pricingOptions={props.pricingOptions} 
        ProgramID={props.program.ProgramID} 
        isVisible={props.visiblePricingTables[`id${props.program.ProgramID}`]}
      />
      <p class="card__bottom-sales__table-toggle" onclick={() => props.togglePricingTable(props.program.ProgramID)}>{(props.visiblePricingTables[`id${props.program.ProgramID}`]) ? 'less' : 'more'}</p>
    </section>
  </div>
);

export default Card;