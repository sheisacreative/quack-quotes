import React, { useEffect, useState } from "react";
import SingleTag from "./SingleTag";
import styles from "./TagContainer.module.css";
import { tags } from "@/src/data/data";

const TagContainer = () => {
  const [showTags, setShowTags] = useState(false);
  const [width, setWidth] = useState(1000);
  const [isMobile, setIsMobile] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    console.log(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (width <= 768) {
      console.log("is mobile");
      setIsMobile(true);
    } else {
      console.log("not mobile");
      setIsMobile(false);
    }
  }, [width]);

  if (tags) {
    return (
      <ul
        className={`${styles.tagContainer} ${
          !isMobile && `container ${styles.containerDesktop}`
        } ${showTags && styles.showTags} `}
      >
        {!isMobile && (
          <button
            className={`body-S ${styles.showTagsButton}`}
            onClick={() => setShowTags(!showTags)}
          >
            {showTags ? `Colapsar tags` : `Todas as tags`}
          </button>
        )}

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
