import React from "react";
import QuackLogo from "../../public/images/quack.svg";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbarMain}>
      <nav className={styles.searchNav}>
        <form action="submit" className={styles.searchBar}>
          {/* TODO: Fix autocomplete  */}
          <input
            type="search"
            placeholder="Search for quotes, author, category..."
            autoComplete="true"
            className={`body-S ${styles.searchInput}`}
          />
          <button type="submit" className={styles.searchButton}>
            <IoSearch />
          </button>
        </form>
      </nav>
      <Image src={QuackLogo} alt="Quack Redação" />
    </header>
  );
};

export default Navbar;
