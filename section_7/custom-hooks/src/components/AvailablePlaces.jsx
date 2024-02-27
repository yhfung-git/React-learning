import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

const fetchSortedPlaces = async () => {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const sortedPlaces = sortPlacesByDistance(places, latitude, longitude);

        resolve(sortedPlaces);
      },
      (error) => {
        if (error.code === 1) {
          resolve(places);
        } else {
          reject(error);
        }
      }
    );
  });
};

const AvailablePlaces = ({ onSelectPlace }) => {
  const {
    fetchedData: availablePlaces,
    isLoading,
    error,
  } = useFetch(fetchSortedPlaces, []);

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
