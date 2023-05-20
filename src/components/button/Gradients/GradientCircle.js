import React from "react";
import styles from "./GradientCircle.module.css";
import { useGradientContext } from "@/src/contexts/gradientContext";

const GradientCircle = ({ gradient }) => {
  const { setGradient } = useGradientContext();

  const handleClick = (e) => {
    e.preventDefault();
    setGradient(e.target.style.backgroundImage);
  };

  return (
    <li>
      <button
        className={`body-S ${styles.gradient}`}
        style={{ background: gradient }}
        onClick={(e) => handleClick(e)}
      ></button>
    </li>
  );
};

export default GradientCircle;
