import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    if (isEditing) onChangeName(symbol, playerName);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  const renderedPlayerName = isEditing ? (
    <input type="text" value={playerName} onChange={handleChange} required />
  ) : (
    playerName || initialName
  );

  console.log(playerName);

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        <span className="player-name">{renderedPlayerName}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick} disabled={playerName === ""}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
