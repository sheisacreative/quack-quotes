import React from "react";
import styles from "./MobileButton.module.css";

const MobileButton = ({ action, icon }) => {
  return (
    <li className={styles.buttonContainer}>
      <button className={`body-S ${styles.action}`}>
        <div className={styles.icon}>{icon}</div>
        {action}
      </button>
    </li>
  );
};

export default MobileButton;
