import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="linkHeader">
        <Link to="/characters" className="text-link">
          {" "}
          CHARACTERS{" "}
        </Link>
        <Link to="/comics" className="text-link">
          {" "}
          COMICS{" "}
        </Link>
        <Link to="/favorites" className="text-link">
          {" "}
          FAVORITES{" "}
        </Link>
      </div>
    </header>
  );
};

export default Header;
