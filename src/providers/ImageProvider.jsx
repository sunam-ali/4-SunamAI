import { ImageContext } from "../context";
import useImageGenerate from "../hooks/useImageGenerate";

export const ImageProvider = ({ children }) => {
  const { images, fetchImages, isFetchingAll } = useImageGenerate();
  return (
    <ImageContext.Provider value={{ images, fetchImages, isFetchingAll }}>
      {children}
    </ImageContext.Provider>
  );
};
