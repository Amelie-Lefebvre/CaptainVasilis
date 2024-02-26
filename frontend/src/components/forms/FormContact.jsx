// imports
import PropTypes from "prop-types";
import { useState } from "react";

// overlay to display after client clicked the button
const Message = ({ showOverlay, setShowOverlay }) => {
  const handleOverlayClick = () => {
    setShowOverlay(false); // Hide overlay when clicked
  };

  return (
    showOverlay && (
      <div id="overlay_message">
        <div id="message">
          <span className="close_overlay" onClick={handleOverlayClick}>
            &times;
          </span>
          <div>
            <p>Thank you!</p>
            <p>Your message has been sent</p>
            <p>We will do our best to answer you within 24H</p>
          </div>
        </div>
      </div>
    )
  );
};

Message.propTypes = {
  showOverlay: PropTypes.bool.isRequired,
  setShowOverlay: PropTypes.func.isRequired,
};

// FORM
const FormContact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showOverlay, setShowOverlay] = useState(false);

  const { firstName, lastName, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOverlay(true);
  };

  const isFormValid = () => {
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      subject.trim() !== "" &&
      message.trim() !== ""
    );
  };
  return (
    <>
      <form id="form_contact" onSubmit={handleSubmit}>
        <div className="form_contact_input">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form_contact_input">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form_contact_input">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form_contact_input">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={handleChange}
            required
          />
        </div>
        <div id="form_contact_input_message">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            required
            style={{ width: "80%", resize: "none" }}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={!isFormValid()}
          className="btn_next_step"
        >
          Send Message
        </button>
      </form>
      <Message showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
    </>
  );
};

export default FormContact;
