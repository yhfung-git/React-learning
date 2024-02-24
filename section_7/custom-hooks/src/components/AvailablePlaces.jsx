import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

const AvailablePlaces = ({ onSelectPlace }) => {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);

      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const sortedPlaces = sortPlacesByDistance(
              places,
              latitude,
              longitude
            );

            setAvailablePlaces(sortedPlaces);
            setIsLoading(false);
          },
          (error) => {
            if (error.code === 1) {
              setAvailablePlaces(places);
            }
            setIsLoading(false);
          }
        );
      } catch (error) {
        console.error(error);
        setError({
          message: error.message || "Failed to fetch places.",
        });
        setIsLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching available places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
};

export default AvailablePlaces;
