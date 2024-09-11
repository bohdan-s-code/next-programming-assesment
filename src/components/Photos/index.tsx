'use client';

import React from 'react';

import styles from './styles.module.css';
import { useGetPhotos } from '../../hooks/useGetPhotos';

export function Photos() {
  const { photos } = useGetPhotos();

  // TODO: add loading state and error handling
  console.log(photos);

  return (
    <>
      <h3>Results</h3>

      <div className={styles.photosContainer}>
        {/* TODO: implement photos grid */}
      </div>
    </>
  );
}
