import { useState } from 'react';

export const useNftCard = () => {
    const [loadedImage, setLoadedImage] = useState< boolean >(false);
    const handleImageLoad = () => {
      setLoadedImage(true)
    };
  return { loadedImage,handleImageLoad};
};