

import { useEffect, useState } from "react";

function DayDown(props) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    setSeconds(Math.floor((time / 1000) % 60));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  };

  useEffect(() => {
    getTimeUntil(props.deadline);
  });

  useEffect(() => {
    setInterval(() => getTimeUntil(props.deadline), 1000);
  }, [props.deadline]);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  return (
    <div className="countdown">
      <div>{leading0(days)}d:</div>
      <div>{leading0(hours)}h:</div>
      <div>{leading0(minutes)}m:</div>
      <div>{leading0(seconds)}s</div>
    </div>
  );
}

export default DayDown;
