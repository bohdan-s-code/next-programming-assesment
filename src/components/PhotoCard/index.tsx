'use client';

import React from 'react';

import styles from './styles.module.css';

// TODO: implement PhotoCard component
export function PhotoCard({ photo }: { photo: unknown }) {
  console.log(photo);

  return <div className={styles.photoCardContainer}>photo</div>;
}
