import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import "./_introCard.scss";

const IntroCard = ({ title, txt }) => {
  const isMobile = useMediaQuery({ minWidth: 580 });

  return (
    <article className="introduction_article">
      <img
        className="icon_doodle_left_arrow"
        src="/src/assets/images/images_structure/arrow_right.svg"
        alt="doodle arrow pointing to the right"
      />
      <section>
        <h2>{title}</h2>
        {isMobile ? (
          <p>{txt}</p>
        ) : (
          <p>
            <span id="indentation"></span>
            {txt}
          </p>
        )}
      </section>
    </article>
  );
};

IntroCard.propTypes = {
  title: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
};

export default IntroCard;
