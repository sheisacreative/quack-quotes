import React from "react";
import SingleTag from "./SingleTag";
import styles from "./TagContainer.module.css";

const TagContainer = () => {
  return (
    <ul className={`container ${styles.tagContainer}`}>
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
  );
};

export default TagContainer;
