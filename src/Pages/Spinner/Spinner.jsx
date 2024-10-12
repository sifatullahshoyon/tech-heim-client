import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import React from "react";
import useAuth from "../../Components/Hooks/useAuth/useAuth";

const Spinner = () => {
  const { ticketNumber, setTicketNumber } = useAuth();
  const generateRandomNumbers = (count, exclude) => {
    const numbers = [];
    while (numbers.length < count) {
      const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit number
      if (randomNum !== exclude && !numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  };

  // Generate 8 random numbers and include the user's ticketNumber
  const [data] = useState([
    { option: ticketNumber?.toString(), style: { backgroundColor: "black" } },
    ...generateRandomNumbers(8, ticketNumber).map((num) => ({
      option: num.toString(),
    })),
  ]);

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber); // Set the random prize number
      setMustSpin(true); // Set to spin the wheel
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          outerBorderColor={"#000000"}
          outerBorderWidth={8}
          innerRadius={30}
          innerBorderColor={"#000000"}
          innerBorderWidth={10}
          radiusLineColor={"#dedede"}
          radiusLineWidth={5}
          fontSize={18}
          onStopSpinning={() => {
            setMustSpin(false);
            if (data[prizeNumber].option === ticketNumber.toString()) {
              alert("Congratulations! You won!");
              setTicketNumber(null);
            } else {
              alert("Sorry, better luck next time!");
              setTicketNumber(null);
            }
          }}
          animationDuration={2}
          animationEase="cubic-bezier(0.68, -0.55, 0.27, 1.55)"
        />
        <button
          disabled={!ticketNumber}
          onClick={handleSpinClick}
          className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          SPIN
        </button>
      </div>
    </div>
  );
};

export default Spinner;
