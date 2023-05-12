import React from "react";
import { FaFacebookF } from "react-icons/fa";

const FacebookShareButton = ({ url }) => {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

  return (
    <a
      href={facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="socialBtn"
    >
      <FaFacebookF />
      Share on Facebook
    </a>
  );
};

export default FacebookShareButton;
