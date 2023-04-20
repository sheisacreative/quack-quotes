import React from "react";
import styles from "./GradientsContainer.module.css";
import GradientCircle from "./GradientCircle";
import { backgroundGradients } from "../../../data/data";

const GradientsContainer = () => {
  return (
    <ul className={styles.gradientsContainer}>
      {backgroundGradients.map((gradient) => {
        return <GradientCircle key={gradient.id} {...gradient} />;
      })}
    </ul>
  );
};

export default GradientsContainer;
