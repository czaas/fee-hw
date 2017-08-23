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

  var programTypesAvailable = programTypes.map(type => <a class="new-program__form__button" onclick={() => props.actions.newProgram.setProgramType(type)}>{type}</a>);

  var programsAvailableCheckboxes = programsAvailable.map((programName) => (
    <label>
      <input name={programName} checked={(props.state.tabsProgramIsOn.indexOf(programName) !== -1)} type="checkbox" value={programName} onchange={tabChanged} />
      {programName}
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

        {/** ==================
          # part one of form
          
          Must select one 
         ================== */}

        <p style={{ textAlign: 'center' }}>Choose one program type</p>

        <div class="new-program__form__part new-program__form__part--one">
          {programTypesAvailable}
        </div>


        {/** ==================
          second part of form
         ================== */}
        <div class={`new-program__form__part new-program__form__part--two disabled-until-state ${ (props.state.programType !== "") ? "" : "disabled-until-state--disabled" }`} data-message="Choose One Program Type">
          
          <form onsubmit={saveName}>
            <label class="new-program__form__part__name">
              Program Name
              <input type="text" id="programName" onchange={saveName} value={props.state.Name} />
              <button>Save</button>
            </label>
          </form>
          
          <div class={`disabled-until-state ${ props.state.Name !== '' ? '' : 'disabled-until-state--disabled' }`}  data-message="Enter Program Name">
            <form onchange={onlineScheduling}>
              <p>Allow Online Scheduling?</p>

              <div class="new-program__form__part__online-scheduling">
                <label>
                  Yes <input type="radio" name="online-scheduling" value="true" checked={props.state.onlineScheduling} onselect={onlineScheduling} />
                </label>
                <label>
                  No <input type="radio" name="online-scheduling" value="false" checked={!props.state.onlineScheduling} onselect={onlineScheduling} />
                </label>
              </div>
            </form>

            <form class="block-element">
              <label class="new-program__form__part__name">
                Default Capactiy <input type="number" defaultValue="10" onblur={defaultCapacity} />
              </label>
            </form>

            <form>
                Tabs this program is on:
                <span class="hint">Choose as many as you would like</span>
              <div class="checkboxes block-element">
                {programsAvailableCheckboxes}
              </div>
            </form>

            <form>
              <a class="new-program__form__button new-program__form__button--add" onclick={props.actions.addNewProgram}>Add New Program</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProgramForm;