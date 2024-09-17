'use client';

import React from 'react';

import styles from './styles.module.css';
import { useGetPhotos } from '../../hooks/useGetPhotos';

export function Photos() {
  const { photos } = useGetPhotos();
  console.log(photos);

  return (
    <>
      <h3>{photos.length} Results</h3>

      <div data-testid="photos" className={styles.photosContainer}></div>
    </>
  );
}
