import React, { useEffect } from "react";
import styles from "./SingleTag.module.css";

const SingleTag = () => {
  return (
    <li>
      <button className={`body-S ${styles.singleTag}`}>Nome da Tag</button>
    </li>
  );
};

export default SingleTag;
