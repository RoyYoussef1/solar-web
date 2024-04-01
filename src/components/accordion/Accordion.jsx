import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Accordion.css";
import data from "./AccordionData";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="question-wrapper">
      <button
        className={`question-container ${isOpen ? "active-faq" : ""}`}
        onClick={onClick}
      >
        <div className={`question-content ${isOpen ? "active-title" : ""}`}>
          {question}
        </div>
        <RiArrowDropDownLine
          className={`arrow ${isOpen ? "active-faq" : ""}`}
        />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer-content">{answer}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="questions-section">
      <div className="questions-wrapper">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
