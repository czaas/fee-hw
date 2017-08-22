import { 
  h,
} from 'hyperapp';

/**
  @param {props.activeChildren} - Array of subnav objects
  @param {props.activeSubNav} - state of current active subnav item
*/
function SubNav(props) {
  var children = props.activeChildren.map((child) => {
    var currentActiveChild = false;

    if (props.activeSubNav == '' && child.default) {
      currentActiveChild = true;
    } else if (props.activeSubNav === child.name) {
      currentActiveChild = true;
    }

    return <li class={`subnav__item ${currentActiveChild ? 'subnav__item--active' : ''}`}><a onclick={() => props.updateSubNav(child.name)}>{child.name}</a></li>;
  });

  return (
    <nav class="header__subnav subnav">
      <ul class="subnav__inner">{children}</ul>
    </nav>
  );
}

export default SubNav;