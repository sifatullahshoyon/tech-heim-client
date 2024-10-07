import { useEffect, useState } from "react";
import WheelSpinner from "../WheelSpinner/WheelSpinner";

const Countdown = ({ purchaseDate ,ticketNumber}) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date(purchaseDate);
    targetDate.setDate(targetDate.getDate() + 7); // Add 7 days

    const countdownInterval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        setTimeLeft("You can spin the wheel now!");
      } else {
         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
         const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [purchaseDate]);

  return (
    <div>
      {timeLeft ? (
        <div>
          {" "}
          <>
          <WheelSpinner  ticketNumber={ticketNumber}></WheelSpinner>
          </>
          <div>{timeLeft} ki</div>{" "}
        </div>
      ) : (
        <div>{timeLeft}</div>
      )}
    </div>
  );
};
export default Countdown;
