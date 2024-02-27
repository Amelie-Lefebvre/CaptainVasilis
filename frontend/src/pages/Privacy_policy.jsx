// imports
import IntroCard from "../components/generics/IntroCard";
import introParameter from "../assets/parameters/parameterCardIntro.json";

const Privacy_policy = () => {
  const { title, txt } = introParameter.cardIntro.privacy_policy;
  return (
    <>
      <IntroCard title={title} txt={txt} />
    </>
  );
};

export default Privacy_policy;
