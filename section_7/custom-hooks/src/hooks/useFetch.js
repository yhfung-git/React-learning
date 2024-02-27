import { useEffect, useState } from "react";

export const useFetch = (fetchFn, initialValue) => {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const places = await fetchFn();
        setFetchedData(places);
      } catch (error) {
        console.error(error);
        setError({
          message: error.message || "Failed to fetch data.",
        });
      }

      setIsLoading(false);
    };

    fetchData();
  }, [fetchFn]);

  return { setFetchedData, fetchedData, isLoading, setError, error };
};
