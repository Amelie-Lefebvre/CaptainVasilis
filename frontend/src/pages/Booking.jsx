// imports
import Calendar from "react-calendar";
import BackofficeMenu from "../components/navs/BackofficeMenu";
import "./_booking.scss";
import "react-calendar/dist/Calendar.css";
import "../components/individuals/_reservationDatePicker.scss";

const Booking = () => {
  return (
    <main id="booking">
      <BackofficeMenu />
      <article id="booking_article">
        <div className="booking_article_selection">
          <p>sdfsqdfqsdf</p>
          <Calendar
            prevLabel={<span>&larr;</span>}
            nextLabel={<span>&rarr;</span>}
            formatShortWeekday={(locale, date) => {
              return date
                .toLocaleDateString(locale, { weekday: "short" })
                .charAt(0);
            }}
          />
        </div>
      </article>
    </main>
  );
};

export default Booking;
