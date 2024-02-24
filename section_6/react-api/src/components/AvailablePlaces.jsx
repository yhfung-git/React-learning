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
        setError(error);
        setIsLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (error) {
    const errroMessage =
      error.message || "Could not fetch places, please try again later.";

    return <Error title="An error occurred!" message={errroMessage} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
};

export default AvailablePlaces;
