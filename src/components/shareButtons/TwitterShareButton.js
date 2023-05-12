import React from "react";
import { RiTwitterFill } from "react-icons/ri";

const TwitterShareButton = ({ text, url }) => {
  const tweetText = encodeURIComponent(text);
  const tweetUrl = encodeURIComponent(url);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;

  return (
    <a href={twitterUrl} target="_blank" className="socialBtn">
      <RiTwitterFill />
      Compartilhar no Twitter
    </a>
  );
};

export default TwitterShareButton;
