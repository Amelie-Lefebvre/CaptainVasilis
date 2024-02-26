// imports
import PropTypes from "prop-types";
import "./_destinationIntroCard.scss";

const DestinationIntroCard = ({ title, intro, p1, p2 }) => {
  return (
    <>
      <article className="destination_introduction">
        <img
          id="mapRhodes"
          src="/src/assets/images/images_structure/rhodes_map.svg"
          alt="Rhodes Map"
        />
        <h2>{title}</h2>
        <p id="destination_introduction_p">{intro}</p>
        <section>
          <p>{p1}</p>
          <p>{p2}</p>
        </section>
      </article>
    </>
  );
};

DestinationIntroCard.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
};

export default DestinationIntroCard;
