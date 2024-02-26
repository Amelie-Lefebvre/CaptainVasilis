import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className="form_contact_input_phone">
      <label id="phone">Phone</label>
      <PhoneInput
        country={"in"}
        name="phone"
        value={phoneNumber}
        onChange={handleChange}
        autoComplete="client_phone"
        inputProps={{
          required: true,
        }}
        placeholder="Enter your phone number"
      />
      {!valid && <p>Please enter a valid 10-digit phone number.</p>}
    </div>
  );
};

export default PhoneNumber;
