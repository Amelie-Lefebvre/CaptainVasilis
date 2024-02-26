// imports
import PropTypes from "prop-types";
import { useState } from "react";
import "./_caroussel.scss";

// function inner caroussel
const DestinationCard = ({
  title,
  paragraph,
  to,
  isActive = false,
  onMouseOver = () => {},
  onMouseLeave = () => {},
  className = "",
}) => {
  const panelClasses = `panel ${isActive ? "active" : ""} ${className}`;

  return (
    <div
      className={panelClasses}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="panel_img">
        <h3>{title}</h3>
      </div>
      <div className="panel_story">
        <p>{paragraph}</p>
        <a
          href={to}
          className={`btn_destination_any ${isActive ? "active" : ""}`}
        >
          <button aria-label={`Learn more about ${title}`}>
            Click to learn more...
          </button>
        </a>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  className: PropTypes.string,
};

// final item to caroussel
const Caroussel = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const hoverDelay = 150; // Set your desired delay time

  const handleCardMouseOver = (index) => {
    // Clear any existing hover timeout
    clearTimeout(isHovered);

    // Set a new timeout for hover
    const hoverTimeout = setTimeout(() => {
      setActiveCard(index);
      setIsHovered(true);
    }, hoverDelay);

    // Save the timeout ID to clear it on mouse leave
    setIsHovered(hoverTimeout);
  };

  const handleCardMouseLeave = () => {
    // Clear any existing hover timeout
    clearTimeout(isHovered);

    // If no new hover event occurs within the delay, reset the state
    const leaveTimeout = setTimeout(() => {
      setIsHovered(false);
      setActiveCard(null);
    }, hoverDelay);

    // Save the timeout ID to clear it if a new hover event occurs
    setIsHovered(leaveTimeout);
  };
  return (
    <>
      <article className="expanding_card_nav">
        <div id="container_cards">
          {/*CONTAINER 1 */}
          <DestinationCard
            title="Lindos"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          ducimus est placeat, inventore veniam illo molestias asperiores
          consectetur, aut non natus. Consectetur quis asperiores ut nulla
          amet quo temporibus repudiandae?"
            to="/destinations/lindos"
            isActive={activeCard === 1}
            isHovered={isHovered === 1}
            className={activeCard === null ? "panel non-active" : "panel"}
            onMouseOver={() => handleCardMouseOver(1)}
            onMouseLeave={handleCardMouseLeave}
          />
          {/*CONTAINER 2 */}
          <DestinationCard
            title="St Paul's Bay"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          ducimus est placeat, inventore veniam illo molestias asperiores
          consectetur, aut non natus. Consectetur quis asperiores ut nulla
          amet quo temporibus repudiandae?"
            to="/destinations/st_pauls_bay"
            isActive={activeCard === 2}
            className={activeCard === null ? "panel non-active" : "panel"}
            isHovered={isHovered === 1}
            onMouseOver={() => handleCardMouseOver(2)}
            onMouseLeave={handleCardMouseLeave}
          />
          {/*CONTAINER 3 */}
          <DestinationCard
            title="Paradise Rock"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          ducimus est placeat, inventore veniam illo molestias asperiores
          consectetur, aut non natus. Consectetur quis asperiores ut nulla
          amet quo temporibus repudiandae?"
            to="/destinations/paradise_rock"
            isActive={activeCard === 3}
            className={activeCard === null ? "panel non-active" : "panel"}
            isHovered={isHovered === 1}
            onMouseOver={() => handleCardMouseOver(3)}
            onMouseLeave={handleCardMouseLeave}
          />
          {/*CONTAINER 4 */}
          <DestinationCard
            title="Navarone Bay"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          ducimus est placeat, inventore veniam illo molestias asperiores
          consectetur, aut non natus. Consectetur quis asperiores ut nulla
          amet quo temporibus repudiandae?"
            to="/destinations/navarone_bay"
            isActive={activeCard === 4}
            className={activeCard === null ? "panel non-active" : "panel"}
            onMouseOver={() => handleCardMouseOver(4)}
            isHovered={isHovered === 1}
            onMouseLeave={handleCardMouseLeave}
          />
          {/*CONTAINER 5 */}
          <DestinationCard
            title="Red Sand Beach"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          ducimus est placeat, inventore veniam illo molestias asperiores
          consectetur, aut non natus. Consectetur quis asperiores ut nulla
          amet quo temporibus repudiandae?"
            to="/destinations/red_sand_beach"
            isActive={activeCard === 5}
            className={activeCard === null ? "panel non-active" : "panel"}
            onMouseOver={() => handleCardMouseOver(5)}
            isHovered={isHovered === 1}
            onMouseLeave={handleCardMouseLeave}
          />
          {/*CONTAINER 6 */}
          <DestinationCard
            title="Agathi Golden Sand Beach"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          ducimus est placeat, inventore veniam illo molestias asperiores
          consectetur, aut non natus. Consectetur quis asperiores ut nulla
          amet quo temporibus repudiandae?"
            to="/destinations/agathi_golden_sand_beach"
            isActive={activeCard === 6}
            className={activeCard === null ? "panel non-active" : "panel"}
            onMouseOver={() => handleCardMouseOver(6)}
            isHovered={isHovered === 1}
            onMouseLeave={handleCardMouseLeave}
          />
          {/*CONTAINER 7 */}
          <DestinationCard
            title="Haraki"
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
          ducimus est placeat, inventore veniam illo molestias asperiores
          consectetur, aut non natus. Consectetur quis asperiores ut nulla
          amet quo temporibus repudiandae?"
            to="/destinations/haraki"
            isActive={activeCard === 7}
            className={activeCard === null ? "panel non-active" : "panel"}
            isHovered={isHovered === 1}
            onMouseOver={() => handleCardMouseOver(7)}
            onMouseLeave={handleCardMouseLeave}
          />
        </div>
      </article>
    </>
  );
};

export default Caroussel;
