import React, { useEffect, useRef, useState } from "react";
import SingleTag from "./SingleTag";
import styles from "./TagContainer.module.css";
import { tags } from "@/src/data/data";

const TagContainer = () => {
  const [showTags, setShowTags] = useState(false);
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const tagsListContainer = useRef();
  console.log(width);
  console.log(isMobile);

  useEffect(() => {
    const height = tagsListContainer.current.offsetHeight;
    const width = tagsListContainer.current.offsetWidth;
    setContainerHeight(height);
    setContainerWidth(width);
  }, [tagsListContainer]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  if (tags) {
    return (
      <div
        className={`container ${isMobile && styles.isMobile} ${
          styles.tagsContainer
        }`}
        style={{
          height: showTags && `${containerHeight}px`,
          marginLeft:
            isMobile &&
            `calc(((100vw - (100vw - 100%)) - ${containerWidth}px) / 2)`,
          width:
            isMobile &&
            `calc(100vw - (((100vw - (100vw - 100%)) - ${containerWidth}px) / 2))`,
        }}
      >
        {!isMobile && (
          <button
            className={`body-S ${styles.showTagsButton}`}
            onClick={() => setShowTags(!showTags)}
          >
            {showTags ? `Colapsar tags` : `Todas as tags`}
          </button>
        )}
        <ul className={`${styles.tagsList}`} ref={tagsListContainer}>
          {tags.map((tag, index) => {
            return <SingleTag key={index} {...tag} />;
          })}
        </ul>
      </div>
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
