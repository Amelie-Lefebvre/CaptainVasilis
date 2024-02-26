// imports
import Caroussel from "../components/generics/Caroussel";
import PricesContainer from "../components/containers/PricesContainer";
import ReviewsContainer from "../components/containers/ReviewsContainer";

import "./_index.scss";

const Index = () => {
  return (
    <main id="main_container">
      {/* PRESENTATION */}
      <div id="main_container_presentation">
        <img
          src="/src/assets/images/images_structure/up-right-arrow.svg"
          alt="arrow doddle pointing to the right"
          width="80"
          height="80"
        />
        <h3>Step aboard the Captain Vasilis Boat Tour</h3>
        <p>embark on a journey like no other</p>
        <article id="index_intro">
          <img
            id="index_img"
            src="/src/assets/images/images_structure/rhodes_map_1.svg"
            alt="map of Rhodes"
            width="521"
            height="674"
          />
          <blockquote>
            {" "}
            As you navigate through our galleries capturing the essence of our
            majestic destinations, you will be awe-struck by the sheer beauty
            that lies ahead. Imagine standing on the deck, gazing out at the
            horizon where the deep blue sea meets the endless sky. The waves
            gently lap against the hull, creating a soothing melody that
            instantly transports your mind into a state of tranquility.{" "}
          </blockquote>
          <blockquote>
            This is where your day of relaxation begins. With each passing
            moment, the sea expands before your eyes, unveiling a world of
            wonders that only the Captain Vasilis Boat Tour can offer. As you
            sail further into the sparkling waters, the panorama becomes a
            canvas of breathtaking scenes, painting a picture of pure bliss.
          </blockquote>
          <p id="signature">Captain Vasilis</p>
        </article>
      </div>

      <Caroussel />
      <PricesContainer />
      <ReviewsContainer />
    </main>
  );
};

export default Index;
