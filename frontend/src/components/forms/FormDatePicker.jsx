// imports
import PropTypes from "prop-types";
import { useState } from "react";
import "./_formDatePicker.scss";
import FormPassengerSpots from "./FormPassengerSpots";

const FormDatePicker = ({
  destination1,
  dest1Start,
  dest1End,
  destination2,
  dest2Start,
  dest2End,
  pickUp1,
  pickUp1Time,
  pickUp2,
  pickUp2Time,
  handleCalendarInteraction, // Receive function from props
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedPickUpOption, setSelectedPickUpOption] = useState("");
  const [showPassengersForm, setShowPassengersForm] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "option1") {
      setSelectedPickUpOption("");
      setShowPassengersForm(false);
    } else if (event.target.value === "option2") {
      setShowPassengersForm(true);
    }
  };

  const handlePickUpOptionChange = (event) => {
    setSelectedPickUpOption(event.target.value);
    setShowPassengersForm(true); // Show passenger form when pick-up option selected
  };

  const handleCheckAvailability = () => {
    handleCalendarInteraction(); // Call the function received from props
  };

  return (
    <div id="formDatePicker">
      {/* form to pick up location */}
      <form id="formDatePicker_form">
        <div className="radio_btn">
          <label className="radio_btn_selection">
            <input
              className="radio_input"
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            {destination1}
          </label>
          <span className="radio_infos">
            From {dest1Start} to {dest1End} (duration 6H30)
          </span>

          {/* Conditionally render pick-up points for destination 1 */}
          {selectedOption === "option1" && (
            <div className="radio_btn_pickup_points visible">
              <div className="radio_btn_points">
                <label className="radio_btn_points_label">
                  <input
                    className="radio_btn_points_input"
                    type="radio"
                    value="pickUp1"
                    checked={selectedPickUpOption === "pickUp1"}
                    onChange={handlePickUpOptionChange}
                  />
                  Pick me up at {pickUp1}
                </label>
                <span className="radio_btn_points_infos">
                  (Departure {pickUp1Time})
                </span>
              </div>
              <div className="radio_btn_points">
                <label className="radio_btn_points_label">
                  <input
                    className="radio_btn_points_input"
                    type="radio"
                    value="pickUp2"
                    checked={selectedPickUpOption === "pickUp2"}
                    onChange={handlePickUpOptionChange}
                  />
                  Pick me up at {pickUp2}
                </label>
                <span className="radio_btn_points_infos">
                  (Departure {pickUp2Time})
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="radio_btn">
          <label className="radio_btn_selection">
            <input
              className="radio_input"
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            {destination2}
          </label>
          <span className="radio_infos">
            From {dest2Start} to {dest2End} (duration 2H30)
          </span>
        </div>
      </form>

      {/* display passengers */}
      {showPassengersForm && (
        <div id="formDatePicker_passengers">
          <FormPassengerSpots />
          <button
            id="formDatePicker_passengers_check_available"
            onClick={handleCheckAvailability}
          >
            check availability
          </button>
        </div>
      )}
    </div>
  );
};

FormDatePicker.propTypes = {
  destination1: PropTypes.string.isRequired,
  destination2: PropTypes.string.isRequired,
  dest1End: PropTypes.string.isRequired,
  dest1Start: PropTypes.string.isRequired,
  dest2End: PropTypes.number.isRequired,
  dest2Start: PropTypes.string.isRequired,
  pickUp1: PropTypes.string.isRequired,
  pickUp1Time: PropTypes.string.isRequired,
  pickUp2: PropTypes.string.isRequired,
  pickUp2Time: PropTypes.string.isRequired,
  handleCalendarInteraction: PropTypes.func.isRequired,
};

export default FormDatePicker;
