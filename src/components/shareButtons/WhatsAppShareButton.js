import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppShareButton = ({ text, url }) => {
  const message = encodeURIComponent(`${text} - ${url}`);
  const whatsappUrl = `https://wa.me/?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="socialBtn"
    >
      <FaWhatsapp />
      Share on WhatsApp
    </a>
  );
};

export default WhatsAppShareButton;
