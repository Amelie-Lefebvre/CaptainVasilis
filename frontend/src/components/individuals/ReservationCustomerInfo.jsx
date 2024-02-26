// imports
// import IntlTelInput from "react-intl-tel-input";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormPassengerSpots from "../forms/FormPassengerSpots";
import "./_reservationCustomerInfo.scss";
// import "react-intl-tel-input/dist/main.css";

const ReservationCustomerInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== ""
    ) {
      setIsNextButtonEnabled(true);
    } else {
      setIsNextButtonEnabled(false);
    }
  }, [firstName, lastName, email]);

  const handleNext = () => {
    const newPath = location.pathname.includes("customer_information")
      ? location.pathname.replace(
          "customer_information",
          "customer_confirmation"
        )
      : "customer_confirmation";
    navigate(newPath);
  };
  return (
    <div id="reservation_customer_info">
      <div id="reservation_customer_form">
        <div id="reservation_full_name">
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div id="reservation_mail_phone">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <FormPassengerSpots />
      </div>
      <button
        className="btn_next_step"
        onClick={handleNext}
        disabled={!isNextButtonEnabled}
      >
        Next
      </button>
    </div>
  );
};

export default ReservationCustomerInfo;
