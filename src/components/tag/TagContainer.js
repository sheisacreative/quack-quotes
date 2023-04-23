import React from "react";
import SingleTag from "./SingleTag";
import styles from "./TagContainer.module.css";
import { useQuotesContext } from "@/src/contexts/quotesContext";

const TagContainer = () => {
  const { tags } = useQuotesContext();

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
