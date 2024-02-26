// imports
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormConfirmation from "../forms/FormConfirmation";
import newClientParameter from "../../assets/parameters/parameterNewCustomer.json";
import priceParameter from "../../assets/parameters/parameterPrice.json";
import "./_reservationConfirmation.scss";

const ReservationConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);
  const [randomClient, setRandomClient] = useState(null);
  const [totalToPay, setTotalToPay] = useState(0);

  useEffect(() => {
    const clients = Object.values(newClientParameter["New Customer"]);
    const randomIndex = Math.floor(Math.random() * clients.length);
    const selectedClient = clients[randomIndex];
    setRandomClient(selectedClient);
  }, []);

  useEffect(() => {
    if (randomClient) {
      // Determine the price data based on reservation_type and tour_type
      const priceData =
        randomClient.tour_type === 0
          ? priceParameter.CardPrice.price_morning
          : priceParameter.CardPrice.price_afternoon;

      // Calculate total based on reservation type
      const total =
        randomClient.reservation_type === 0
          ? priceData.fullBoat
          : randomClient.adults * priceData.adultPrice +
            randomClient.children * priceData.childPrice;

      setTotalToPay(total);
    }
  }, [randomClient]);

  const handleNext = () => {
    const newPath = location.pathname.includes("customer_confirmation")
      ? location.pathname.replace("customer_confirmation", "customer_payment")
      : "customer_payment";
    navigate(newPath);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div id="reservation_confirmation">
      {randomClient && (
        <FormConfirmation
          firstname={randomClient.firstName}
          lastname={randomClient.lastName}
          email={randomClient.email}
          phone={randomClient.phone}
          reservation_type={randomClient.reservation_type}
          tour_type={randomClient.tour_type}
          date={randomClient.time}
          adults={randomClient.adults}
          kids={randomClient.children}
          money={totalToPay}
          isChecked={isChecked}
          setIsChecked={handleCheckboxChange}
        />
      )}
      <button
        className="btn_next_step"
        onClick={handleNext}
        disabled={!isChecked}
      >
        Next
      </button>
    </div>
  );
};

export default ReservationConfirmation;
