import React from "react";
import { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const Navbar = () => {
  const { changeMode, colorMode } = useContext(CountryContext);

  return (
    <nav className="navbar" id={`${colorMode}-nav`}>
      <div className="navbar__container">
        <h1 className="navbar__title">
          <a href="/">Where in the world?</a>
        </h1>

        <button className="navbar__button" onClick={changeMode}>
          &#9789; Dark mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
