import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import { sortPlacesByDistance } from "./loc.js";
import logoImg from "./assets/logo.png";

const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) => {
  return AVAILABLE_PLACES.find((place) => place.id === id);
});

const App = () => {
  const selectedPlace = useRef();
  const [sortedPlaces, setSortedPlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        latitude,
        longitude
      );

      setSortedPlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];

    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];

    if (storedIds.indexOf(selectedPlace.current) !== -1) {
      const updatedIds = storedIds.filter((id) => id !== selectedPlace.current);

      updatedIds.length > 0
        ? localStorage.setItem(
            "selectedPlaces",
            JSON.stringify([...updatedIds])
          )
        : localStorage.removeItem("selectedPlaces");
    }
  }, []);

  return (
    <>
      <Modal onOpen={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText="Sorting places by distance..."
          places={sortedPlaces.length > 0 ? sortedPlaces : AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
};

export default App;
