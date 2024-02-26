// imports
import IntroCard from "../components/generics/IntroCard";
import ReservationSteps from "../components/containers/ReservationSteps";
import introParameter from "../assets/parameters/parameterCardIntro.json";
import "./_reservation.scss";

const Reservation = () => {
  const { title, txt } = introParameter.cardIntro.make_reservation;
  return (
    <>
      <IntroCard title={title} txt={txt} />

      <ReservationSteps />
    </>
  );
};

export default Reservation;
