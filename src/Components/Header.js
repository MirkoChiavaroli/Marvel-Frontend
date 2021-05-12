import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="linkHeader">
        <Link to="/characters"> Personagges </Link>
        <Link to="/comics"> Comics </Link>
        <Link to="/favorites"> Favoris </Link>
      </div>
    </header>
  );
};

export default Header;
