import React from "react";
import ButtonIcon from "./ButtonIcon";
import { actionIcons } from "../../../data/data";
import styles from "./ButtonIconContainer.module.css";

const ButtonIconContainer = ({ quote, className }) => {
  return (
    <ul className={`${className} ${styles.actionContainer}`}>
      {actionIcons.map((action) => {
        return <ButtonIcon key={action.id} quote={quote} {...action} />;
      })}
    </ul>
  );
};

export default ButtonIconContainer;
