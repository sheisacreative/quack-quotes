import React from "react";
import SingleTag from "./SingleTag";
import styles from "./TagContainer.module.css";
import { useNavigationContext } from "@/src/contexts/navigationContext";

const TagContainer = () => {
  const { tags } = useNavigationContext();

  if (tags) {
    return (
      <ul className={`${styles.tagContainer}`}>
        {tags.map((tag, index) => {
          return <SingleTag key={index} tag={tag} />;
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
