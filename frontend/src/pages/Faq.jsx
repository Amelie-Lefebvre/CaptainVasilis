// imports
import IntroCard from "../components/generics/IntroCard";
import Accordion from "../components/individuals/Accordion";
import introParameter from "../assets/parameters/parameterCardIntro.json";
import faqParameters from "../assets/parameters/parameterQuestions.json";
import "./_faq.scss";

const Faq = () => {
  const { title, txt } = introParameter.cardIntro.faq;
  const faqItems = Object.values(faqParameters.Questions).map(
    (questionObj) => ({
      question: questionObj.question,
      answer: questionObj.answer,
    })
  );

  return (
    <>
      <IntroCard title={title} txt={txt} />
      <article id="article_faq">
        <Accordion
          items={faqItems}
          iconSrcOpen="/src/assets/images/images_structure/minus.svg"
          iconSrcClosed="/src/assets/images/images_structure/plus.svg"
        />
      </article>
    </>
  );
};

export default Faq;
