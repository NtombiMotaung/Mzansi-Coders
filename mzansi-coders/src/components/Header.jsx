import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>FutureCoders</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/programs">Programs</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
