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

const Header = (props) => (
  <header class="header">
    <div class="header__logo">Urban Yogo</div>
    <nav class="nav">
      <div class="nav__mmenu">
        <svg width="30" height="30" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>
      </div>
      <ul class="nav__tabs tabs">
        {NavItems.sort((a, b) => a.order - b.order).map((nameItem) => (
          <li onclick={() => props.actions.updateMainNav(nameItem.id)} class={`tabs__tab ${ props.state.activeNavId === nameItem.id ? 'tabs__tab--active' : '' }`}><a>{nameItem.name}</a></li>
        ))}
      </ul>

      <div class="nav__subnav subnav">
        <ul class="subnav__inner">
          <SubNav 
            activeSubNav={props.state.activeSubNav} 
            activeChildren={NavItems.filter((navItem) => (navItem.id === props.state.activeNavId))[0].children} 
            updateSubNav={props.actions.updateSubNav}
          />
        </ul>
      </div>
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