import { 
  h,
} from 'hyperapp';

/**
  @param {props.updateMainNav} - Action to update main nav
  @param {props.activeNavId} - Current active nav id
*/
function MainNav(props) {
  return (
    <nav class="header__main-nav">
      <ul class="header__main-nav__tabs tabs">
        {props.NavItems.sort((a, b) => a.order - b.order).map((nameItem) => (
          <li onclick={() => props.updateMainNav(nameItem.id)} class={`tabs__tab ${ props.activeNavId === nameItem.id ? 'tabs__tab--active' : '' }`}><a>{nameItem.name}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;