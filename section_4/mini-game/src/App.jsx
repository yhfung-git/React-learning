import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

const App = () => {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Middle" targetTime={5} />
        <TimerChallenge title="Difficult" targetTime={10} />
        <TimerChallenge title="Expert" targetTime={15} />
      </div>
    </>
  );
};

export default App;
