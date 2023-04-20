import React from "react";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { actionIcons } from "../../../data/data";
import styles from "./MobileButtonsContainer.module.css";
import MobileButton from "./MobileButton";

const MobileButtonsContainer = () => {
  return (
    <ul className={styles.actionContainer}>
      {actionIcons.map((action) => {
        return <MobileButton key={action.id} {...action} />;
      })}
    </ul>
  );
};

export default MobileButtonsContainer;
