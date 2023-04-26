import React, { useEffect } from "react";
import styles from "./SingleTag.module.css";
import Link from "next/link";
import { useNavigationContext } from "@/src/contexts/navigationContext";

const SingleTag = ({ tag, isLoading }) => {
  const { turnToSlug, selectedTag, setSeletecTag } = useNavigationContext();

  if (isLoading) {
    return <li className={`body-S loading ${styles.singleTag}`}>...</li>;
  }

  const slug = `/category/${turnToSlug(tag)}`;

  return (
    <li>
      <Link
        href={slug}
        className={`body-S ${styles.singleTag} ${
          selectedTag === tag ? styles.isSelected : ""
        }`}
        onClick={() => {
          console.log(selectedTag);
          setSeletecTag(tag);
        }}
      >
        {tag}
      </Link>
    </li>
  );
};

export default SingleTag;
