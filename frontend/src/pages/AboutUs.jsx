// imports
import IntroCard from "../components/generics/IntroCard";
import introParameter from "../assets/parameters/parameterCardIntro.json";

const AboutUs = () => {
  const { title, txt } = introParameter.cardIntro.about_us;
  return (
    <>
      <IntroCard title={title} txt={txt} />
    </>
  );
};

export default AboutUs;
