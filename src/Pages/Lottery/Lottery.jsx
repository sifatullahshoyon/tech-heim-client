import { useState } from "react";
import Countdown from "../../Components/Countdown/Counterdown";
import useAuth from "../../Components/Hooks/useAuth/useAuth";

const Lottery = () => {
  const { ticketNumber, setTicketNumber } = useAuth();
 
  const [ticketPrice] = useState(10); // Example ticket price
  const [buyDate,setBuyDate]=useState(null);

  const handleBuyTicket = () => {
    setBuyDate(new Date())
    const randomTicket = Math.floor(1000 + Math.random() * 9000);
    setTicketNumber(randomTicket);
    alert(`Your ticket number is ${randomTicket}.`);
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
        {!ticketNumber && (
          <div>
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Join Our Lottery!</h2>
            <p className="text-gray-700 mb-4">
              Participate in our exciting lottery for a chance to win amazing prizes! Each ticket is
              just ${ticketPrice}. Buy your coupon now and spin the wheel!
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-semibold text-blue-600">
                Coupon Price: ${ticketPrice}
              </span>
            </div>
          </div>
        )}

        {!ticketNumber ? (
          <button
            onClick={handleBuyTicket}
            className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Buy Coupon
          </button>
        ) : (
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">
              Your Coupon Details
            </h3>
            <p className="text-center text-gray-600">
              Your Coupon number is: <span className="font-bold text-blue-600">{ticketNumber}</span>
            </p>
            <p className="text-gray-700 mt-4">
              Thank you for purchasing your Coupon! You can now participate in the lottery draw.
              Remember, you can spin the wheel after a minute from your purchase time! Good luck!
            </p>

            <Countdown purchaseDate={buyDate}></Countdown>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Lottery;
