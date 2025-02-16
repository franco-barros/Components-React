"use client";
import React from "react";
import styles from "../../styles/InstagramProfile.module.css";
import { FaInstagram } from "react-icons/fa";

interface InstagramProfileProps {
  username: string;
  profileUrl: string;
  images: string[];
}

const InstagramProfile: React.FC<InstagramProfileProps> = ({
  username,
  profileUrl,
  images,
}) => {
  return (
    <div className={styles.instagramProfile}>
      <div className={styles.header}>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.icon} />
          <span>@{username}</span>
        </a>
      </div>
      <div className={styles.grid}>
        {images.map((img, idx) => (
          <a
            key={idx}
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gridItem}
          >
            <img src={img} alt={`Instagram post ${idx + 1}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramProfile;
