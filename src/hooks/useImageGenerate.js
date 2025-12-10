import { useState } from "react";
import useSettings from "./useSettings";

function fetchWithTimeout(url, timeout) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout)
    ),
  ]);
}

export default function useImageGenerate() {
  const { settings } = useSettings();
  const [images, setImages] = useState([]);
  const [isFetchingAll, setIsFetchingAll] = useState(false);

  async function fetchSingleImage(prompt, index) {
    const params = {
      width: settings.width,
      height: settings.height,
      seed: settings.seed
        ? Number(settings.seed)
        : Math.floor(Math.random() * 10000),
      model: settings.model || "flux",
    };

    const queryParams = new URLSearchParams(params);
    const encodedPrompt = encodeURIComponent(prompt);
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?${queryParams.toString()}`;

    try {
      const response = await fetchWithTimeout(url, 15000);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      setImages((prev) => {
        const copy = [...prev];
        copy[index] = {
          id: index,
          url: imageUrl,
          loading: false,
          error: null,
        };
        return copy;
      });
    } catch (err) {
      setImages((prev) => {
        const copy = [...prev];
        copy[index] = {
          id: index,
          url: null,
          loading: false,
          error: err.message || "Unable to load image",
        };
        return copy;
      });
    }
  }

  async function fetchImages(prompt) {
    setIsFetchingAll(true);
    setImages(
      Array(9)
        .fill(null)
        .map((_, i) => ({
          id: i,
          url: null,
          loading: true,
          error: null,
        }))
    );

    for (let i = 0; i < 9; i++) {
      await fetchSingleImage(prompt, i);
    }

    setIsFetchingAll(false);
  }

  return {
    images,
    fetchImages,
    isFetchingAll,
  };
}
