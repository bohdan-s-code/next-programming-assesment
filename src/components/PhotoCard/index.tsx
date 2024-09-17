'use client';

import React from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

import LikeIcon from '../../../public/images/heart-icon.svg';

type Props = {
  photo: unknown;
};

export function PhotoCard({ photo }: Props) {
  return (
    <div className={styles.photoCardContainer}>
      <Image
        src={photo.url}
        alt={photo.title}
        width={600}
        height={600}
        className={styles.imageContainer}
      />

      <span className={styles.photoTitle}>{photo.title}</span>

      <button className={styles.likeButton}>
        <LikeIcon className={styles.likeIcon} />
      </button>
    </div>
  );
}
