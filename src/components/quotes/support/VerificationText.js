import React from "react";
import styles from "./VerificationText.module.css";
import { joinSentence } from "@/src/pages/api/notionApi";

const VerificationText = ({
  Source,
  VerificationSource,
  VerificationLink,
  marginTop,
}) => {
  return (
    <p className={`body-S ${marginTop && styles.marginTop}`}>
      {joinSentence(Source.rich_text)} Verificado através de{" "}
      <a href={VerificationLink.url} target="blank">
        {joinSentence(VerificationSource.rich_text)}
      </a>
      .
    </p>
  );
};

export default VerificationText;
