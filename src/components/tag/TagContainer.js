import React from "react";
import SingleTag from "./SingleTag";
import styles from "./TagContainer.module.css";
import { tags } from "@/src/data/data";

const TagContainer = () => {
  if (tags) {
    return (
      <ul className={`${styles.tagContainer}`}>
        {tags.map((tag, index) => {
          return <SingleTag key={index} {...tag} />;
        })}
      </ul>
    );
  }

  return (
    <ul className={`${styles.tagContainer}`}>
      <SingleTag isLoading />
      <SingleTag isLoading />
      <SingleTag isLoading />
      <SingleTag isLoading />
      <SingleTag isLoading />
      <SingleTag isLoading />
      <SingleTag isLoading />
    </ul>
  );
};

export default TagContainer;
