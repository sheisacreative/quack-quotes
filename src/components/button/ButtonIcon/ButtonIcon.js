import React from "react";
import { RiImage2Line } from "react-icons/ri";
import styles from "./ButtonIcon.module.css";

const ButtonIcon = ({ action, icon }) => {
  return (
    <li>
      <button className={`body-S ${styles.action}`}>
        <div className={styles.icon}>{icon}</div>
        <span className={styles.actionText}>
          {action === "Compartilhar" ? "" : action}
        </span>
      </button>
    </li>
  );
};

export default ButtonIcon;
