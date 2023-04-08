import React from "react";
import SingleTag from "./SingleTag";
import styles from "./TagContainer.module.css";

const TagContainer = () => {
  return (
    <div className={styles.relativePosition}>
      <ul className={`${styles.tagContainer}`}>
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
      </ul>
    </div>
  );
};

export default TagContainer;
