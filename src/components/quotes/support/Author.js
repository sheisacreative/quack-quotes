import React from "react";
import styles from "./Author.module.css";
import Image from "next/image";
import Link from "next/link";
import { joinSentence } from "@/src/pages/api/notionApi";
import nelson from "../../../../public/images/author/nelson-rodrigues.jpg";
import { firstLower } from "@/src/utils/supportFunctions";

const Author = ({ Author, AuthorTitle, image, className }) => {
  return (
    <div className={`${styles.author}`}>
      {/* Author image */}
      {image && (
        <Image
          src={nelson}
          alt={`Foto de ${joinSentence(Author.rich_text)}`}
          className={styles.authorImg}
        />
      )}

      {/* Author name and title */}
      {image ? (
        // With image: Author name on top, title bottom.
        <div>
          <p className="body-M">
            <cite>
              <Link href="/" className={styles.authorName}>
                {joinSentence(Author.rich_text)}
              </Link>
            </cite>
          </p>
          <p className="body-S">{joinSentence(AuthorTitle.rich_text)}</p>
        </div>
      ) : (
        // Without image: Author and title side by side.
        <p className={`${className} ${styles.authorInfo}`}>
          <cite>
            {joinSentence(Author.rich_text)},{" "}
            {firstLower(joinSentence(AuthorTitle.rich_text))}
          </cite>
        </p>
      )}
    </div>
  );
};

export default Author;
