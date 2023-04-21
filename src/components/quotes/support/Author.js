import React from "react";
import styles from "./Author.module.css";
import Image from "next/image";
import Link from "next/link";
import nelson from "../../../../public/images/author/nelson-rodrigues.jpg";
import { firstLower } from "@/src/utils/supportFunctions";

const Author = ({ author, authorTitle, image, className }) => {
  return (
    <div className={`${styles.author}`}>
      {/* Author image */}
      {image && (
        <Image
          src={nelson}
          alt={`Foto de ${author}`}
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
                {author}
              </Link>
            </cite>
          </p>
          <p className="body-S">{authorTitle}</p>
        </div>
      ) : (
        // Without image: Author and title side by side.
        <p className={`${className} ${styles.authorInfo}`}>
          <cite>
            {author}, {firstLower(authorTitle)}
          </cite>
        </p>
      )}
    </div>
  );
};

export default Author;
