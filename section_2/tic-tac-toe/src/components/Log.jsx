const Log = ({ turns, players }) => {
  const logs = turns.map((turn) => {
    const { square, player } = turn;
    const { row, col } = square;

    return (
      <li key={`${row}${col}`}>
        Player {players[player]} selected row {row + 1}, col {col + 1}
      </li>
    );
  });

  return <ol id="log">{logs}</ol>;
};

export default Log;
