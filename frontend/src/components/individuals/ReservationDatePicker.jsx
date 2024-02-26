// imports
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import FormDatePicker from "../forms/FormDatePicker";
import priceParamenter from "../../assets/parameters/parameterPrice.json";
import "react-calendar/dist/Calendar.css";
import "./_reservationDatePicker.scss";

const ReservationDatePicker = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true); // State to control overlay visibility

  const handleNext = () => {
    navigate("customer_information");
  };

  const handleCalendarInteraction = () => {
    setShowOverlay(false); // Function to hide the overlay
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const lastWeekOfApril = new Date(currentYear, 3, 22);
  const firstDayOfLastWeekOfApril = new Date(lastWeekOfApril);
  lastWeekOfApril.setDate(
    lastWeekOfApril.getDate() - ((lastWeekOfApril.getDay() + 6) % 7)
  );
  const minDate = firstDayOfLastWeekOfApril;
  const maxDate = new Date(currentYear, 8, 30);

  const onChange = (newDate) => {
    setDate(newDate);
    setIsNextButtonEnabled(true);
  };

  return (
    <>
      <div id="reservation_date">
        <FormDatePicker
          destination1={priceParamenter.CardPrice.price_morning.title}
          dest1Start={priceParamenter.CardPrice.price_morning.start}
          dest1End={priceParamenter.CardPrice.price_morning.end}
          destination2={priceParamenter.CardPrice.price_afternoon.title}
          dest2Start={priceParamenter.CardPrice.price_afternoon.start}
          dest2End={priceParamenter.CardPrice.price_afternoon.end}
          pickUp1={priceParamenter.CardPrice.price_morning.pickupPointA}
          pickUp2={priceParamenter.CardPrice.price_morning.pickupPointB}
          pickUp1Time={priceParamenter.CardPrice.price_morning.pickupPointATime}
          pickUp2Time={priceParamenter.CardPrice.price_morning.pickupPointBTime}
          handleCalendarInteraction={handleCalendarInteraction} // Pass function to FormDatePicker
        />
        <div className="calendar">
          {showOverlay && <div className="calendar-overlay"></div>}
          <Calendar
            onChange={onChange}
            value={date}
            minDate={minDate}
            maxDate={maxDate}
            prevLabel={<span>&larr;</span>}
            nextLabel={<span>&rarr;</span>}
            formatShortWeekday={(locale, date) => {
              return date
                .toLocaleDateString(locale, { weekday: "short" })
                .charAt(0);
            }}
          />
        </div>
      </div>
      <button
        className="btn_next_step"
        onClick={handleNext}
        disabled={!isNextButtonEnabled}
      >
        Next
      </button>
    </>
  );
};

export default ReservationDatePicker;
