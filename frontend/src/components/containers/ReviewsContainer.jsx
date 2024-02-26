// imports
import PropTypes from "prop-types";
import reviewerParameter from "../../assets/parameters/parameterReviewers.json";
import starIcon from "/src/assets/images/images_structure/star.svg";
import "./_reviewsContainers.scss";

// model for the card reviews
const Review_Card = ({
  firstName,
  lastName,
  picture,
  review,
  rating,
  time,
}) => {
  const lastNameInitials =
    lastName
      .split(" ")
      .map((word) => word[0])
      .join(". ") + ".";
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  // Create an array to hold the star icons
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={starIcon}
        alt="star"
        className={i <= rating ? "star active" : "star"}
      />
    );
  }

  return (
    <div className="review_card">
      <div className="review_card_rating">{stars}</div>
      <header>
        <img src={picture} alt="cutomer_img" />
        <p className="review_card_name">
          {firstName} {lastNameInitials}
        </p>
      </header>
      <section>
        <p>{review}</p>
      </section>
      <p className="time">{formatDate(time)}</p>
    </div>
  );
};

Review_Card.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  picture: PropTypes.string,
  review: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
};

function Reviews() {
  function abbreviateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text; // Return the original text if it's already within the maxLength
    } else {
      const abbreviatedText = text.slice(0, maxLength - 3) + "..."; // Add "..." at the end to indicate abbreviation
      return abbreviatedText;
    }
  }
  // Extract reviewer data from the JSON file
  const reviewers = Object.values(reviewerParameter.Reviewers);

  // Shuffle the array of reviewers randomly
  const shuffledReviewers = [...reviewers].sort(() => Math.random() - 0.5);

  // Select the first 8 reviewers after shuffling
  const randomReviewers = shuffledReviewers.slice(0, 8);
  return (
    <article className="reviews">
      <header>
        <h3>Feedback from our guests</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          eos harum quia sint obcaecati numquam, totam adipisci esse quaerat
          maiores quisquam quas quasi reprehenderit ex dolor a necessitatibus
          commodi fuga.
        </p>
      </header>
      <section className="reviews_feedback">
        {randomReviewers.map((reviewer, index) => (
          <Review_Card
            key={index}
            firstName={reviewer.firstName}
            lastName={reviewer.lastName}
            picture={reviewer.picture}
            review={abbreviateText(reviewer.review, 325)}
            rating={reviewer.rating}
            time={reviewer.time}
          />
        ))}
      </section>
    </article>
  );
}

export default Reviews;
