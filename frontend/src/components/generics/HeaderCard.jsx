import PropTypes from "prop-types";
import "./_headerCard.scss";

const HeaderCard = ({ extraClass, txt, txt2 }) => {
  return (
    <div className={`header_menu_desktop ${extraClass}`}>
      <p>{txt}</p>
      <p>{txt2}</p>
    </div>
  );
};

HeaderCard.propTypes = {
  extraClass: PropTypes.string,
  txt: PropTypes.string.isRequired,
  txt2: PropTypes.string.isRequired,
};

export default HeaderCard;
