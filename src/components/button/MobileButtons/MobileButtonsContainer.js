import React from "react";
import { actionIcons } from "../../../data/data";
import styles from "./MobileButtonsContainer.module.css";
import MobileButton from "./MobileButton";

const MobileButtonsContainer = ({ quote }) => {
  return (
    <ul className={styles.actionContainer}>
      {actionIcons.map((action) => {
        return <MobileButton key={action.id} quote={quote} {...action} />;
      })}
    </ul>
  );
};

export default MobileButtonsContainer;
