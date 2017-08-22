import { 
  h,
} from 'hyperapp';

/**
  @param {props.activeNavId} - Current active nav id
  @param {props.updateMainNav} - Action to update main nav
  @param {props.mmenuOpen} - Current state on whether mmenu is open
*/
function MMenu(props) {
  // Sorting by order, then removing the active item, and finally iterating and creating jsx objects
  var mmenuItems = props.NavItems.sort((a, b) => a.order - b.order).filter((item) => item.id !== props.activeNavId).map((nameItem) => {
    if (nameItem.id !== props.activeNavId) {
      return <li onclick={() => props.updateMainNav(nameItem.id)} class={`${ props.activeNavId === nameItem.id ? '' : '' }`}><a>{nameItem.name}</a></li>;
    }
  });

  var height = props.mmenuOpen ? mmenuItems.length * 44 : 0;

  return (
    <nav class="header__mmenu" style={{ height: `${height}px` }}>
      <ul class="mmenu">
        {mmenuItems}
      </ul>
    </nav>
  );
}

export default MMenu;