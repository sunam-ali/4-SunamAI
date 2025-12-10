import { useEffect, useState } from "react";

const useModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function fetchModels() {
      try {
        const response = await fetch("https://image.pollinations.ai/models");
        if (!response.ok) throw new Error("Failed to fetch models");
        const data = await response.json();
        if (!ignore) {
          setModels(data);
          setLoading(false);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setLoading(false);
        }
      }
    }
    fetchModels();
    return () => {
      ignore = true;
    };
  }, []);

  return { models, loading, error };
};

export default useModels;
