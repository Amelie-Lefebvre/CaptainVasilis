// imports
import PropTypes from "prop-types";
import pricesParameter from "../../assets/parameters/parameterPrice.json";
import "./_pricesContainer.scss";

// PRICE CARD
const PriceCard = ({
  title,
  start,
  end,
  duration,
  childAgeStart,
  childAgeEnd,
  childPrice,
  adultPrice,
  fullBoat,
}) => {
  return (
    <section className="priceCard">
      <h3>{title}</h3>
      <div className="priceCard_duration">
        <p>
          From {start} to {end}
        </p>
        <p>(duration {duration})</p>
      </div>
      <span></span>
      <ul>
        <li>
          CHILD ({childAgeStart} TO {childAgeEnd} YEARS OLD): {childPrice}€
        </li>
        <li>ADULT: {adultPrice}€</li>
        <li>OR</li>
        <li>FULL BOAT TO YOURSELF: {fullBoat}€</li>
      </ul>
    </section>
  );
};

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  childAgeStart: PropTypes.number.isRequired,
  childAgeEnd: PropTypes.number.isRequired,
  childPrice: PropTypes.number.isRequired,
  adultPrice: PropTypes.number.isRequired,
  fullBoat: PropTypes.number.isRequired,
};

const PricesContainer = () => {
  const {
    title: mTitle,
    start: mStart,
    end: mEnd,
    duration: mDuration,
    childAgeStart: mChildAgeStart,
    childAgeEnd: mChildAgeEnd,
    childPrice: mChildPrice,
    adultPrice: mAdultPrice,
    fullBoat: mFullBoat,
  } = pricesParameter.CardPrice.price_morning;
  const {
    title: aTitle,
    start: aStart,
    end: aEnd,
    duration: aDuration,
    childAgeStart: aChildAgeStart,
    childAgeEnd: aChildAgeEnd,
    childPrice: aChildPrice,
    adultPrice: aAdultPrice,
    fullBoat: aFullBoat,
  } = pricesParameter.CardPrice.price_afternoon;
  return (
    <article id="prices_menu">
      <PriceCard
        title={mTitle}
        start={mStart}
        end={mEnd}
        duration={mDuration}
        childAgeStart={mChildAgeStart}
        childAgeEnd={mChildAgeEnd}
        childPrice={mChildPrice}
        adultPrice={mAdultPrice}
        fullBoat={mFullBoat}
      />
      <div className="orbit-container">
        <a href="/to_reservation" className="center-span">
          Book a tour
        </a>
        <div className="fish_1">
          <img
            src="/src/assets/images/images_structure/fish.svg"
            alt="fish"
            width="40"
            height="40"
          />
        </div>
        <div className="fish_2">
          <img
            src="/src/assets/images/images_structure/fish.svg"
            alt="fish"
            width="40"
            height="40"
          />
        </div>
      </div>
      <PriceCard
        title={aTitle}
        start={aStart}
        end={aEnd}
        duration={aDuration}
        childAgeStart={aChildAgeStart}
        childAgeEnd={aChildAgeEnd}
        childPrice={aChildPrice}
        adultPrice={aAdultPrice}
        fullBoat={aFullBoat}
      />
    </article>
  );
};

export default PricesContainer;
