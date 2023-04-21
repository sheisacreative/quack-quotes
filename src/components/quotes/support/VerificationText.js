import React from "react";
import styles from "./VerificationText.module.css";
import { joinSentence } from "@/src/pages/api/notionApi";

const VerificationText = ({
  source,
  verificationSource,
  verificationLink,
  marginTop,
}) => {
  return (
    <p className={`body-S ${marginTop && styles.marginTop}`}>
      {source} Verificado através de{" "}
      <a href={verificationLink} target="blank">
        {verificationSource}
      </a>
      .
    </p>
  );
};

export default VerificationText;
