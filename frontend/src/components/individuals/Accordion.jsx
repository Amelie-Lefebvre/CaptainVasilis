// imports
import { useState } from "react";
import PropTypes from "prop-types";

function AccordionItem({
  question,
  answer,
  isOpen,
  toggleAccordion,
  iconSrcOpen,
  iconSrcClosed,
}) {
  const iconSrc = isOpen ? iconSrcOpen : iconSrcClosed;

  return (
    <div className="accordion_item">
      <button
        className="accordion_item_button"
        onClick={toggleAccordion}
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="accordion_item_question">{question}</span>
        <img
          className="icon"
          aria-hidden="true"
          src={iconSrc}
          alt="expend icon"
        />
      </button>
      <div className={`accordion_item_answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
  iconSrcOpen: PropTypes.string.isRequired,
  iconSrcClosed: PropTypes.string.isRequired,
};

function Accordion({ items, iconSrcOpen, iconSrcClosed }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
          iconSrcOpen={iconSrcOpen}
          iconSrcClosed={iconSrcClosed}
        />
      ))}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  iconSrcOpen: PropTypes.string.isRequired,
  iconSrcClosed: PropTypes.string.isRequired,
};

export default Accordion;
