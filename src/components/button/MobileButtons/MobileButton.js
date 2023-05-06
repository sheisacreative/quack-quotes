import React from "react";
import styles from "./MobileButton.module.css";
import { useActionContext } from "@/src/contexts/actionsContext";

const MobileButton = ({ quote, action, icon }) => {
  const { triggerAction } = useActionContext();

  return (
    <li className={styles.buttonContainer}>
      <button
        className={`body-S ${styles.action}`}
        onClick={() => triggerAction(action, quote)}
      >
        <div className={styles.icon}>{icon}</div>
        {action}
      </button>
    </li>
  );
};

export default MobileButton;
