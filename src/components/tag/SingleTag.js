import React from "react";
import styles from "./SingleTag.module.css";
import Link from "next/link";
import { useNavigationContext } from "@/src/contexts/navigationContext";
import { turnToSlug } from "@/src/utils/supportFunctions";

const SingleTag = ({ name, isLoading }) => {
  const { selectedTag, setSeletecTag } = useNavigationContext();

  if (isLoading) {
    return <li className={`body-S loading ${styles.singleTag}`}>...</li>;
  }

  const slug = `/category/${turnToSlug(name)}`;

  const handleClick = () => {
    setSeletecTag(name);
  };

  return (
    <li>
      <Link
        href={{ pathname: slug }}
        className={`body-S ${styles.singleTag} ${
          selectedTag === name ? styles.isSelected : ""
        }`}
        onClick={handleClick}
      >
        {name}
      </Link>
    </li>
  );
};

export default SingleTag;
