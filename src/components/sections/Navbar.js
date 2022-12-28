import React from "react";
import QuackLogo from "../../images/quack.svg";

const Navbar = () => {
  return (
    <header className="navbar-main">
      <nav>
        <form action="submit">
          {/* TODO: Fix autocomplete  */}
          {/* TODO: Make the search work */}
          <input type="text" placeholder="Search" autoComplete="true" />
        </form>
      </nav>
      <img src={QuackLogo} alt="Quack Redação" />
    </header>
  );
};

export default Navbar;
