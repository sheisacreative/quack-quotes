import React from "react";
import SingleTag from "./SingleTag";
import styles from "./TagContainer.module.css";
import { useNavigationContext } from "@/src/contexts/navigationContext";

const TagContainer = () => {
  const { tags } = useNavigationContext();

  return (
    <ul className={`${styles.tagContainer}`}>
      {tags &&
        tags.map((tag, index) => {
          return <SingleTag key={index} tag={tag} />;
        })}
    </ul>
  );
};

export default TagContainer;
