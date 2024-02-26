// imports
import { useState } from "react";
import Incrementation from "../generics/Incrementation";

const FormPassengerSpots = () => {
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  const handleAdultChange = (value) => {
    const totalPassengers = value + numChildren;
    if (totalPassengers <= 23 && value >= 0) {
      setNumAdults(value);
    } else if (value < 0) {
      setNumAdults(0);
      setNumChildren(numChildren); // Keep the number of children unchanged
    }
  };

  const handleChildrenChange = (value) => {
    const totalPassengers = value + numAdults;
    if (totalPassengers <= 23 && value >= 0) {
      setNumChildren(value);
    } else if (value < 0) {
      setNumChildren(0);
      setNumAdults(numAdults); // Keep the number of adults unchanged
    }
  };

  return (
    <form className="formDatePicker_passengers_form">
      <div className="formDatePicker_passenger_inputs">
        <label className="passenger_label">Adults</label>
        <Incrementation value={numAdults} onChange={handleAdultChange} />
      </div>
      <div className="formDatePicker_passenger_inputs">
        <label className="passenger_label">Children</label>
        <Incrementation value={numChildren} onChange={handleChildrenChange} />
      </div>
    </form>
  );
};

export default FormPassengerSpots;
