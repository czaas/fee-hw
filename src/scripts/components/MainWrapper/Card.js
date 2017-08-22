import { 
  h,
} from 'hyperapp';

import { 
  commaPlacer,
} from './../../util/commaPlacer.js';

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

    <SalesGraph 
      currentYear={props.program.Sales.CurrentYear}
      prevYear={props.program.Sales.PreviousYear}
    />

    <section class="card__current-sales">
      <table class="card__current-sales__table" cellspacing="0" cellpadding="0">
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

/**
  @param {props.currentYear} - Current year sales
  @param {props.prevYear} - Previous year sales
*/
function SalesGraph(props) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  var setOfBars = [];
  var maxHeight = 72;
  var largestNumber = 0;

  props.prevYear.forEach(prev => {
    if (prev > largestNumber) {
      largestNumber = prev;
    }
  });

  props.currentYear.forEach(current => {
    if (current > largestNumber) {
      largestNumber = current;
    }
  });

  for (var i = 0; i < props.currentYear.length; i++) {
    var currentYear = props.currentYear[i];
    var prevYear = props.prevYear[i];

    var bars = (
      <div class="all-bars">
        <div class="all-bars__set">
          <div 
            class="all-bars__set__bar all-bars__set__bar--prev" 
            value={`$${commaPlacer(currentYear)}`}
            style={{ height: `${(currentYear / largestNumber) * maxHeight}px` }}
          />
          <div 
            class="all-bars__set__bar all-bars__set__bar--current" 
            value={`$${commaPlacer(prevYear)}`}
            style={{ height: `${(prevYear / largestNumber) * maxHeight}px` }}
          />
        </div>
        <div class="all-bars__month">{months[i]}</div>
      </div>
    );


    setOfBars.push(bars);
  }

  return (
    <div 
      class="graph"
    >
      {setOfBars}
    </div>
  );
}

function PricingOptionTable(props) {
  var currentOptions = props.pricingOptions.filter((eachOption) => eachOption.ProgramID === parseInt(props.ProgramID, 10));

  /*
  Animation calculation happening here:
  CSS: transition: height; overflow: hidden;

  - If visible, multiplies the amount of current options based on the height of each one (the + 1 is to account for the static headers and the last plus 1 accounts for the bottom border)
  - Else not visible height of component is zero. 
  */
  var currentHeight = { height: (props.isVisible) ? `${((currentOptions.length + 1) * 20) + 1}px` : '0' };

  return (
    <div class="card__bottom-sales__table-wrapper" style={currentHeight}>
      <table class={`card__bottom-sales__table`} cellspacing="0" cellpadding="0">
        <tr>
          <th>Price Name</th>
          <th>Current</th>
          <th>1 - Year</th>
        </tr>
        {currentOptions.map((eachOption) => (
          <tr>
            <td>{eachOption.Name}</td>
            <td>${commaPlacer(eachOption.Sales)}</td>
            <td class="card__bottom-sales__table__multi-graph">&nbsp;</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Card;
