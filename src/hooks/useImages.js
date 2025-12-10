import { useContext } from "react";
import { ImageContext } from "../context";

const useImages = () => {
  const context = useContext(ImageContext);
  return context;
};

export default useImages;
