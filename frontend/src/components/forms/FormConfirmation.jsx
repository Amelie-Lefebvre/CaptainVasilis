// imports
import PropTypes from "prop-types";
import "./_formConfirmation.scss";

const FormConfirmation = ({
  firstname,
  lastname,
  email,
  phone,
  reservation_type,
  tour_type,
  date,
  adults,
  kids,
  money,
  isChecked,
  setIsChecked,
}) => {
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <div id="reservation_confirmation_resume_datas">
        <div className="client_feedback_datas">
          <label htmlFor="fullName">Full name</label>
          <span>{firstname + " " + lastname}</span>
        </div>
        <div className="client_feedback_datas">
          <label htmlFor="email">E-mail</label>
          <span>{email}</span>
        </div>
        <div className="client_feedback_datas">
          <label htmlFor="phone">Phone</label>
          <span>{phone ? phone : "not provided"}</span>
        </div>
        <div className="client_feedback_datas">
          <label htmlFor="reservation">Reservation</label>
          <span>
            {reservation_type === 0 ? "Private" : "Tickets"} -{" "}
            {tour_type === 0 ? "LazyBoatTour" : "Afternoon Tour"}
          </span>
        </div>
        <div className="client_feedback_datas">
          <label htmlFor="date">Date</label>
          <span>{new Date(date).toLocaleDateString("en-GB")}</span>
        </div>
        <div className="client_feedback_datas">
          <label htmlFor="passengers">Passengers</label>
          <span>
            {adults === 1 ? "1 Adult" : `${adults} Adults`}
            {adults > 0 &&
              kids > 0 &&
              ` - ${kids === 1 ? "1 Child" : `${kids} Children`}`}
          </span>
        </div>
        <span id="reservation_line"></span>
        <div className="client_feedback_datas">
          <label htmlFor="total_to_pay">Total to pay</label>
          <span>{money} €</span>
        </div>
      </div>
      <div id="reservation_confirmation_correctinfos">
        <input
          type="checkbox"
          id="confirmation_checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="confirmation_checkbox">
          Ensure all informations are correct before proceeding
        </label>
      </div>
    </>
  );
};

export default FormConfirmation;

FormConfirmation.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  reservation_type: PropTypes.number.isRequired,
  tour_type: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  adults: PropTypes.number.isRequired,
  kids: PropTypes.number.isRequired,
  money: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setIsChecked: PropTypes.func.isRequired,
};
