import React from "react";
import styles from "./ButtonIcon.module.css";
import { useActionContext } from "@/src/contexts/actionsContext";

const ButtonIcon = ({ quote, action, icon }) => {
  const { triggerAction } = useActionContext();

  return (
    <>
      <li>
        <button
          onClick={() => triggerAction(action, quote)}
          className={`body-S ${styles.action}`}
        >
          <div className={styles.icon}>{icon}</div>
          <span className={styles.actionText}>
            {action === "Compartilhar" ? "" : action}
          </span>
        </button>
      </li>
    </>
  );
};

export default ButtonIcon;
