import { 
  h,
} from 'hyperapp';

import { 
  commaPlacer,
} from './../util/commaPlacer.js';

const SingleProgram = (props) => {

  var monthlySales = commaPlacer(props.program.TotalMonthlySales);

  if (monthlySales.indexOf('.') === -1) {
    monthlySales += '.00';
  }

  return (
    <tr>
      <td>{props.program.Name}</td>
      <td>${monthlySales}</td>
      <td>{commaPlacer(props.program.MonthlyAttendance)} visits</td>
    </tr>
  );
};

export default SingleProgram;