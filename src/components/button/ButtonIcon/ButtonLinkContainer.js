import React from "react";
import styles from "./ButtonLinkContainer.module.css";
import { actionIcons } from "@/src/data/data";
import { useActionContext } from "@/src/contexts/actionsContext";

const ButtonLinkContainer = ({ quote }) => {
  const { triggerAction } = useActionContext();

  return (
    <div className={`body-M ${styles.actionsContainer}`}>
      {actionIcons.map((action) => {
        return (
          <React.Fragment key={action.id}>
            {" "}
            <button
              className={styles.actionButton}
              onClick={() => triggerAction(action.action, quote)}
            >
              {action.action}
            </button>
            {action.id != 3 ? <div className={styles.line} /> : ""}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ButtonLinkContainer;
