import React from "react";
import QuackLogo from "../../images/quack.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbarMain}>
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
