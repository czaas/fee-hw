import { 
  h,
} from 'hyperapp';

const Header = () => (
  <header>
    <div>Logo</div>
    <nav>
      <ul>
        <li><a href="#">Dashboard</a>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Business Overview</a></li>
            <li><a href="#">Schedule</a></li>
            <li><a href="#">Reports</a></li>
          </ul>
        </li>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Classes</a></li>
        <li><a href="#">Workshops</a></li>
        <li><a href="#">Appointments</a></li>
        <li><a href="#">Client Home</a></li>
        <li><a href="#">Retail</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;