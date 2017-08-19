import { 
  h,
} from 'hyperapp';

const Header = () => (
  <header class="header">
    <div class="header__logo">Urban Yogo</div>
    <nav class="nav">
      <div class="nav__mmenu">
        <svg width="30" height="30" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>
      </div>
      <ul class="nav__tabs tabs">
        <li class="tabs__tab tabs__tab--active"><a href="#">Dashboard</a>
          <ul class="tabs__tab__children-wrapper">
            <li class="tabs__tab__children"><a href="#">Dashboard</a></li>
            <li class="tabs__tab__children tabs__tab__children--active"><a href="#">Business Overview</a></li>
            <li class="tabs__tab__children"><a href="#">Schedule</a></li>
            <li class="tabs__tab__children"><a href="#">Reports</a></li>
          </ul>
        </li>
        <li class="tabs__tab"><a href="#">Sign In</a></li>
        <li class="tabs__tab"><a href="#">Classes</a></li>
        <li class="tabs__tab"><a href="#">Workshops</a></li>
        <li class="tabs__tab"><a href="#">Appointments</a></li>
        <li class="tabs__tab"><a href="#">Client Home</a></li>
        <li class="tabs__tab"><a href="#">Retail</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;