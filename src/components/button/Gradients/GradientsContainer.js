import React from "react";
import styles from "./GradientsContainer.module.css";
import GradientCircle from "./GradientCircle";
import { backgroundGradients } from "../../../data/data";

const GradientsContainer = ({ className }) => {
  return (
    <ul className={`${className} ${styles.gradientsContainer}`}>
      {backgroundGradients.map((gradient) => {
        return <GradientCircle key={gradient.id} {...gradient} />;
      })}
    </ul>
  );
};

export default GradientsContainer;
