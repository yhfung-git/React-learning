import { useState, useEffect } from "react";

const ProgressBar = ({ time, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const timer = setTimeout(onTimeout, time);

    return () => clearTimeout(timer);
  }, [time, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      value={remainingTime}
      max={time}
      style={{ direction: "rtl" }}
      className={mode}
    />
  );
};

export default ProgressBar;
