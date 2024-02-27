// imports
import IntroCard from "../components/generics/IntroCard";
import introParameter from "../assets/parameters/parameterCardIntro.json";

const Attributions = () => {
  const { title, txt } = introParameter.cardIntro.attributions;
  return (
    <>
      <IntroCard title={title} txt={txt} />
      <a href="https://www.freepik.com/free-photo/attractive-pretty-woman-with-fair-hair-white-shirt-smiling-while-using-cell-phone-chatting-with-her-boyfriend-posing-beauty-youth-concept_8921105.htm#query=woman%20cellphone&position=26&from_view=keyword&track=ais&uuid=c9711d86-5286-4cd1-9f3a-059c1e4d24b2">
        Image by cookie_studio
      </a>{" "}
      on Freepik
    </>
  );
};

export default Attributions;
