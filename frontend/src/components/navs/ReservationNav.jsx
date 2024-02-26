// imports
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ReservationNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [infoDisabled, setInfoDisabled] = useState(true);
  const [confirmationDisabled, setConfirmationDisabled] = useState(true);
  const [paymentDisabled, setPaymentDisabled] = useState(true);

  useEffect(() => {
    // Update disabled state based on current location
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case "/to_reservation":
        setInfoDisabled(true);
        setConfirmationDisabled(true);
        setPaymentDisabled(true);
        break;
      case "/to_reservation/customer_information":
        setInfoDisabled(false); // Enable the button for "/customer_information"
        setConfirmationDisabled(true);
        setPaymentDisabled(true);
        break;
      case "/to_reservation/customer_confirmation":
        setInfoDisabled(false);
        setConfirmationDisabled(false);
        setPaymentDisabled(true);
        break;
      case "/to_reservation/customer_payment":
        setInfoDisabled(false);
        setConfirmationDisabled(false);
        setPaymentDisabled(false);
        break;
      default:
        break;
    }
  }, [location.pathname]);

  const handleNext = () => {
    navigate("");
  };
  const handleNextA = () => {
    navigate("customer_information");
  };
  const handleNextB = () => {
    navigate("customer_confirmation");
  };
  const handleNextC = () => {
    navigate("customer_payment");
  };

  return (
    <nav className="reservation_nav">
      <button className="btn_reservation" onClick={handleNext}>
        <span>choose a date</span>
      </button>

      <button
        className={`btn_reservation ${infoDisabled ? "disabled" : ""}`}
        onClick={handleNextA}
        disabled={infoDisabled}
      >
        <span>information</span>
      </button>

      <button
        className={`btn_reservation ${confirmationDisabled ? "disabled" : ""}`}
        onClick={handleNextB}
        disabled={confirmationDisabled}
      >
        <span>confirmation</span>
      </button>

      <button
        className={`btn_reservation ${paymentDisabled ? "disabled" : ""}`}
        onClick={handleNextC}
        disabled={paymentDisabled}
      >
        <span>payment</span>
      </button>
    </nav>
  );
};

export default ReservationNav;
