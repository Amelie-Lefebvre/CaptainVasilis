// imports
import { Routes, Route, useLocation } from "react-router-dom";
import ReservationNav from "../navs/ReservationNav";
// routes
import ReservationDatePicker from "../individuals/ReservationDatePicker";
import ReservationCustomerInfo from "../individuals/ReservationCustomerInfo";
import ReservationConfirmation from "../individuals/ReservationConfirmation";
import ReservationPayment from "../individuals/ReservationPayment";
import "./_reservationSteps.scss";

const ReservationSteps = () => {
  const location = useLocation();
  let stepName = "Choose your date";
  if (location.pathname.includes("customer_information")) {
    stepName = "Your Information";
  } else if (location.pathname.includes("customer_confirmation")) {
    stepName = "Reviewing Order";
  } else if (location.pathname.includes("customer_payment")) {
    stepName = "Payment";
  }
  return (
    <>
      <ReservationNav />
      <main className="reservation_steps">
        <div className="reservation_name">
          <h2>{stepName}</h2>
        </div>
        <section className="reservation_change_step">
          {/* IMPORTANT BITS: CONTAINS THE PROCEDURE FOR RESERVATION */}
          <article className="reservation_content">
            <section className="reservation_img">
              <img
                src="/src/assets/images/images_structure/grotto.avif"
                alt="grotto in Rhodes"
              />
            </section>
            <section className="reservation_infos">
              <Routes>
                <Route path="" element={<ReservationDatePicker />} />

                <Route
                  path="customer_information"
                  element={<ReservationCustomerInfo />}
                />
                <Route
                  path="customer_confirmation"
                  element={<ReservationConfirmation />}
                />
                <Route
                  path="customer_payment"
                  element={<ReservationPayment />}
                />
              </Routes>
            </section>
          </article>
        </section>
      </main>
    </>
  );
};

export default ReservationSteps;
