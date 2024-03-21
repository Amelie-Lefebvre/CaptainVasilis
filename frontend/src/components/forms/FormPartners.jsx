//imports
import PropTypes from "prop-types";

const FormPartners = ({
  showOverlay,
  toggleOverlay,
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <>
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label htmlFor="logo">Logo:</label>
              <input
                type="file"
                id="logo"
                name="logo"
                accept="image/*"
                onChange={handleChange}
              />

              <label htmlFor="morningChildRate">Morning Child Rate:</label>
              <input
                type="text"
                id="morningChildRate"
                name="morningChildRate"
                value={formData.morningChildRate}
                onChange={handleChange}
              />

              <label htmlFor="morningAdultRate">Morning Adult Rate:</label>
              <input
                type="text"
                id="morningAdultRate"
                name="morningAdultRate"
                value={formData.morningAdultRate}
                onChange={handleChange}
              />

              <label htmlFor="morningFullRate">Morning Full Boat Rate:</label>
              <input
                type="text"
                id="morningFullRate"
                name="morningFullRate"
                value={formData.morningFullRate}
                onChange={handleChange}
              />

              <label htmlFor="afternoonChildRate">Afternoon Child Rate:</label>
              <input
                type="text"
                id="afternoonChildRate"
                name="afternoonChildRate"
                value={formData.afternoonChildRate}
                onChange={handleChange}
              />

              <label htmlFor="afternoonAdultRate">Afternoon Adult Rate:</label>
              <input
                type="text"
                id="afternoonAdultRate"
                name="afternoonAdultRate"
                value={formData.afternoonAdultRate}
                onChange={handleChange}
              />

              <label htmlFor="afternoonFullRate">
                Afternoon Full Boat Rate:
              </label>
              <input
                type="text"
                id="afternoonFullRate"
                name="afternoonFullRate"
                value={formData.afternoonFullRate}
                onChange={handleChange}
              />

              <button type="submit">Submit</button>
            </form>
            <button onClick={toggleOverlay}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

FormPartners.propTypes = {
  showOverlay: PropTypes.bool.isRequired,
  toggleOverlay: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    morningChildRate: PropTypes.string.isRequired,
    morningAdultRate: PropTypes.string.isRequired,
    morningFullRate: PropTypes.string.isRequired,
    afternoonChildRate: PropTypes.string.isRequired,
    afternoonAdultRate: PropTypes.string.isRequired,
    afternoonFullRate: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormPartners;
