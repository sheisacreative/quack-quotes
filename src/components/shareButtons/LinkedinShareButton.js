import React from "react";
import { RiLinkedinFill } from "react-icons/ri";

const LinkedInShareButton = ({ url }) => {
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

  return (
    <a href={linkedinUrl} target="_blank" className="socialBtn">
      <RiLinkedinFill />
      Share on LinkedIn
    </a>
  );
};

export default LinkedInShareButton;
