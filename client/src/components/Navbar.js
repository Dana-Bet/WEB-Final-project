import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="brand">
          <Link to="/">
            <h1>Yummy-Yummy Food </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
