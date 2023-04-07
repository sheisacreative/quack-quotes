import React from "react";
import { RiImage2Line } from "react-icons/ri";
import styles from "./ButtonIcon.module.css";

const ButtonIcon = ({ action, icon }) => {
  return <li className={styles.action}>{icon}</li>;
};

export default ButtonIcon;
