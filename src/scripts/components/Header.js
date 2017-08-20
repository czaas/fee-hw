import { 
  h,
} from 'hyperapp';

const NavItems = [
  {
    name: 'Dashboard',
    order: 1,
    id: 1,
    children: [{
      name: 'Dashboard',
      order: 1,
    }, {
      name: 'Business Overview',
      order: 2,
      default: true,
    }, {
      name: 'Schedule',
      order: 3,
    }, {
      name: 'Reports',
      order: 4,
    }]
  }, 
  {
    name: 'Sign In',
    order: 2,
    id: 2,
    children: []
  }, 
  {
    name: 'Classes',
    order: 3,
    id: 3,
    children: []
  }, 
  {
    name: 'Workshops',
    order: 4,
    id: 4,
    children: []
  }, 
  {
    name: 'Appointments',
    order: 5,
    id: 5,
    children: []
  }, 
  {
    name: 'Client Home',
    order: 6,
    id: 6,
    children: []
  }, 
  {
    name: 'Retail',
    order: 7,
    id: 7,
    children: []
  }, 
];

const Header = (props) => (
  <header class="header">
    <div class="header__logo">Urban Yogo</div>
    <nav class="nav">
      <div class="nav__mmenu">
        <svg width="30" height="30" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>
      </div>
      <ul class="nav__tabs tabs">
        {NavItems.sort((a, b) => a.order - b.order).map((nameItem) => (
          <li class={`tabs__tab ${ props.state.activeNavId === nameItem.id ? 'tabs__tab--active' : '' }`}><a onclick={() => props.actions.updateMainNav(nameItem.id)}>{nameItem.name}</a></li>
        ))}
      </ul>

      <ul class="nav__subnav subnav">
        <SubNav 
          activeSubNav={props.state.activeSubNav} 
          activeChildren={NavItems.filter((navItem) => (navItem.id === props.state.activeNavId))[0].children} 
          updateSubNav={props.actions.updateSubNav}
        />
      </ul>
    </nav>
  </header>
);


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

  return children;
}

export default Header;