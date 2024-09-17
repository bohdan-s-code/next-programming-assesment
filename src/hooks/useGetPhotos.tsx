import { useEffect, useState } from 'react';

type HookReturnParams = {
  photos: unknown;
};

export function useGetPhotos(): HookReturnParams {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // You can use this url 'https://jsonplaceholder.typicode.com/photos?_limit=50'
  }, []);

  return {
    photos,
  };
}
