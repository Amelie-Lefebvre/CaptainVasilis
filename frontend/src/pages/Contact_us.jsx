// imports
import IntroCard from "../components/generics/IntroCard";
import FormContact from "../components/forms/FormContact";
import introParameter from "../assets/parameters/parameterCardIntro.json";
import "./_contact_us.scss";

const Contact_us = () => {
  const { title, txt } = introParameter.cardIntro.contact_us;
  return (
    <>
      <IntroCard title={title} txt={txt} />

      <article id="contact_us">
        <div className="blob-container">
          <img
            className="blob one"
            src="/src/assets/images/images_temporary/tryout.jpg"
            alt="blue sea"
          />
        </div>
        <div className="contact_us_form">
          <h2>For any enquiries feel free to use this form</h2>
          <span></span>
          <FormContact />
        </div>
      </article>
    </>
  );
};

export default Contact_us;
