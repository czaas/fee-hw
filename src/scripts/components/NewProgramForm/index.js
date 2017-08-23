import { 
  h,
} from 'hyperapp';

const programTypes = [
  "Count Series",
  "Time Series",
  "Membership",
];

const programsAvailable = [
  "Classes",
  "Appointments",
  "Workshops",
  "Outside",
  "Inside",
  "Gym",
];

const NewProgramForm = (props) => {

  var programTypesAvailable = programTypes.map(type => <a onclick={() => props.actions.newProgram.setProgramType(type)}>{type}</a>);

  var programsAvailableCheckboxes = programsAvailable.map((programName) => (
    <label>
      {programName}
      <input name={programName} checked={(props.state.tabsProgramIsOn.indexOf(programName) !== -1)} type="checkbox" value={programName} onchange={tabChanged} />
    </label>
  ));

  function saveName(e) {
    if (e) { e.preventDefault(); }
    var name = document.getElementById('programName').value;

    props.actions.newProgram.setProgramName(name);
  }

  function onlineScheduling(e) {
    if (e) { e.preventDefault(); }
    var value = e.target.value;
    props.actions.newProgram.setOnlineScheduling(value);
  }

  function defaultCapacity(e) {
    if (e) { e.preventDefault(); }
    var value = e.target.value;

    props.actions.newProgram.setDefaultCapacity(parseInt(value, 10));
  }

  function tabChanged(e) {
    if (e) { e.preventDefault(); }
    var value = e.target.value;

    if (props.state.tabsProgramIsOn.indexOf(value) === -1) {
      props.actions.newProgram.addTab(value);
    } else {
      props.actions.newProgram.removeTab(value);
    }
  }

  return (
    <div class={`new-program ${props.state.isOpen ? 'new-program--active' : 'new-program--hidden'}`}>
      <div class="new-program__bg" onclick={() => props.actions.toggleForm(false)} />
      <div class="new-program__form">
        <div class="new-program__form__part-one">
          <p>Choose one program type</p>

          {programTypesAvailable}
        </div>
        <div class={`new-program__form__part-two ${ (props.state.programType === "") ? "disabled" : "" }`}>
          
          <form onsubmit={saveName}>
            <label>
              Program Name
              <input type="text" id="programName" onchange={saveName} value={props.state.Name} />
            </label>
          </form>
          
          <form onchange={onlineScheduling}>
            Allow Online Scheduling?
            <label>
              Yes <input type="radio" name="online-scheduling" value="true" checked={props.state.onlineScheduling} onchange={onlineScheduling} />
            </label>
            <label>
              No <input type="radio" name="online-scheduling" value="false" checked={!props.state.onlineScheduling} onchange={onlineScheduling} />
            </label>
          </form>

          <form>
            Default Capactiy <input type="number" defaultValue={props.state.capacity} onblur={defaultCapacity} />
          </form>

          <form>
            Tabs this program is on: 
            <span>Choose as many as you would like</span>
            {programsAvailableCheckboxes}
          </form>

          <a onclick={props.actions.addNewProgram}>Add New Program</a>
        </div>
      </div>
    </div>
  );
};

export default NewProgramForm;