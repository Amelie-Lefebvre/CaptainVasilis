import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const DestinationNav = ({ back, to1, forth, to2 }) => {
  const location = useLocation().pathname;
  const isStart = location === "/destinations/lindos";
  const isEnd = location === "/destinations/haraki";
  return (
    <nav id="destinationNav">
      <div id="going_back" className={isStart ? "disabled" : ""}>
        <img
          src="/src/assets/images/images_structure/left-arrow.svg"
          alt="home button"
        />
        <a href={back} disabled={isStart}>
          {to1}
        </a>
      </div>
      <div id="going_forth" className={isEnd ? "disabled" : ""}>
        <a href={forth} disabled={isEnd}>
          {to2}
        </a>
        <img
          src="/src/assets/images/images_structure/left-arrow.svg"
          alt="home button"
        />
      </div>
    </nav>
  );
};

DestinationNav.propTypes = {
  back: PropTypes.string,
  to1: PropTypes.string,
  forth: PropTypes.string,
  to2: PropTypes.string,
};

export default DestinationNav;
