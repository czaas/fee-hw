import { 
  h,
} from 'hyperapp';

import NavItems from './NavItems.js';
import MMenu from './MMenu.js';
import MainNav from './MainNav.js';
import SubNav from './SubNav.js';

/**
  @param {props.state} - state of application
  @param {props.actions} - actions available from application
*/
const Header = (props) => (
  <header class="header nav">
      <div class="header__top">
        <div class="header__logo">Urban Yogo</div>
        <MainNav 
          NavItems={NavItems}
          updateMainNav={props.actions.updateMainNav}
          activeNavId={props.state.activeNavId}
        />
        
        <div class="header__mmenu-button" onclick={() => props.actions.toggleMmenu()}>
          <svg width="30" height="30" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>
        </div>
      </div>
      
      <MMenu 
        NavItems={NavItems}
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

export default Header; 