import React from "react";
import QuackLogo from "../../images/quack.svg";
import styles from "./Navbar.module.css";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className={styles.navbarMain}>
      <nav>
        <form action="submit" className={styles.searchBar}>
          {/* TODO: Fix autocomplete  */}
          {/* TODO: Make the search work */}
          <input
            type="search"
            placeholder="Search for quotes, author, category..."
            autoComplete="true"
            className="body-S"
          />
          <button type="submit">
            <IoSearch />
          </button>
        </form>
      </nav>
      <img src={QuackLogo} alt="Quack Redação" />
    </header>
  );
};

export default Navbar;
