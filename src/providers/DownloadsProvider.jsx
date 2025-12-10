import { useState } from "react";
import { DownloadContext } from "../context";

export const DownloadProvider = ({ children }) => {
  const [downloadedImages, setDownloadedImages] = useState([]);

  const addDownloadedImage = (image) => {
    setDownloadedImages((prev) => {
      const exists = prev.find((img) => img.id === image.id);
      return exists ? prev : [...prev, image];
    });
  };

  return (
    <DownloadContext.Provider value={{ downloadedImages, addDownloadedImage }}>
      {children}
    </DownloadContext.Provider>
  );
};
