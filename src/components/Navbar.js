import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__title">
          <Link to="/">Where in the world?</Link>
        </h1>

        <button className="navbar__button">&#9789; Dark mode</button>
      </div>
    </nav>
  );
};

export default Navbar;
