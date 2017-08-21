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
    children: [{
      name: 'Sign In',
      order: 1,
    }, {
      name: 'More items',
      order: 2,
      default: true,
    }, {
      name: 'For Testing',
      order: 3,
    }]
  }, 
  {
    name: 'Classes',
    order: 3,
    id: 3,
    children: [{
      name: 'Classes',
      order: 1,
    }, {
      name: 'More items again',
      order: 2,
      default: true,
    }, {
      name: 'Still Testing',
      order: 3,
    }, {
      name: 'Again',
      order: 4,
    }]
  }, 
  {
    name: 'Workshops',
    order: 4,
    id: 4,
    children: [{
      name: 'Workshops',
      order: 1,
    }, {
      name: 'Click me',
      order: 2,
    }, {
      name: 'Default Active',
      order: 3,
      default: true,
    }, {
      name: 'Once again',
      order: 4,
    }]
  }, 
  {
    name: 'Appointments',
    order: 5,
    id: 5,
    children: [{
      name: 'Appointments',
      order: 1,
    }, {
      name: 'A test',
      order: 2,
    }, {
      name: 'For all tests',
      order: 3,
      default: true,
    }, {
      name: 'And once again',
      order: 4,
    }]
  }, 
  {
    name: 'Client Home',
    order: 6,
    id: 6,
    children: [{
      name: 'Client Home',
      order: 1,
    }, {
      name: 'Click me',
      order: 2,
      default: true,
    }]
  }, 
  {
    name: 'Retail',
    order: 7,
    id: 7,
    children: [{
      name: 'Retail',
      order: 1,
    }, {
      name: 'Buy Stuff',
      order: 2,
      default: true,
    }]
  }, 
];

/**
  @param {props.state} - state of application
  @param {props.actions} - actions available from application
*/
const Header = (props) => (
  <header class="header nav">
      <div class="header__top">
        <div class="header__logo">Urban Yogo</div>
        <MainNav 
          updateMainNav={props.actions.updateMainNav}
          activeNavId={props.state.activeNavId}
        />

        <div class="header__mmenu-button" onclick={() => props.actions.toggleMmenu()}>
          <svg width="30" height="30" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>
        </div>
      </div>
      <MMenu 
        activeNavId={props.state.activeNavId}
        updateMainNav={props.actions.updateMainNav}
        mmenuOpen={props.state.mmenuOpen}
      />

      <SubNav 
        activeSubNav={props.state.activeSubNav} 
        activeChildren={NavItems.filter((navItem) => (navItem.id === props.state.activeNavId))[0].children} 
        updateSubNav={props.actions.updateSubNav}
      />
  </header>
);



/**
  @param {props.activeNavId} - Current active nav id
  @param {props.updateMainNav} - Action to update main nav
  @param {props.mmenuOpen} - Current state on whether mmenu is open
*/
function MMenu(props) {
  // Sorting by order, then removing the active item, and finally iterating and creating jsx objects
  var mmenuItems = NavItems.sort((a, b) => a.order - b.order).filter((item) => item.id !== props.activeNavId).map((nameItem) => {
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

/**
  @param {props.updateMainNav} - Action to update main nav
  @param {props.activeNavId} - Current active nav id
*/
function MainNav(props) {
  return (
    <nav class="header__main-nav">
      <ul class="header__main-nav__tabs tabs">
        {NavItems.sort((a, b) => a.order - b.order).map((nameItem) => (
          <li onclick={() => props.updateMainNav(nameItem.id)} class={`tabs__tab ${ props.activeNavId === nameItem.id ? 'tabs__tab--active' : '' }`}><a>{nameItem.name}</a></li>
        ))}
      </ul>
    </nav>
  );
}

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

export default Header;