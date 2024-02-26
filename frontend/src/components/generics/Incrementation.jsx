// imports
import PropTypes from "prop-types";
import "./_incrementation.scss";

const Incrementation = ({ value, onChange }) => {
  const handleIncrement = (event) => {
    event.preventDefault();
    onChange(value + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="increment-decrement-input">
      <button className="decrement" onClick={handleDecrement}>
        -
      </button>
      <input
        type="text"
        value={value}
        onChange={() => {}}
        className="input-number"
      />
      <div className="buttons">
        <button className="increment" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

Incrementation.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Incrementation;
