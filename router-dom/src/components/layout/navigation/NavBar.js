//import './NavBar.css';
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about"></Link> About
      </li>
      <li>
        <Link to="/contact"></Link> Contact
      </li>
    </nav>
  );
}

export default NavBar;
