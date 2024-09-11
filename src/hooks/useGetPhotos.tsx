import { useEffect, useState } from 'react';

export function useGetPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // TODO: implement fetch photos logic
  }, []);

  return { photos };
}
