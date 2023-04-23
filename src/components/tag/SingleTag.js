import React, { useEffect } from "react";
import styles from "./SingleTag.module.css";

const SingleTag = ({ tag }) => {
  return (
    <li>
      <button className={`body-S ${styles.singleTag}`}>{tag}</button>
    </li>
  );
};

export default SingleTag;
