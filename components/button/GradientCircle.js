import React from "react";
import styles from "./GradientCircle.module.css";

const GradientCircle = ({ gradient }) => {
  return (
    <li>
      <button
        className={`body-S ${styles.gradient}`}
        style={{ background: gradient }}
      ></button>
    </li>
  );
};

export default GradientCircle;
