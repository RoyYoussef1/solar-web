import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Accordion.css";

const data = [
    {
        question: 'Why should I go solar?',
        answer: `The benefits of solar energy span everything from significant financial savings to reducing your impact on the climate. You'll increase your home's value by installing a solar system on your home.`,
    },
    {
        question: 'What are the financial benefits of solar energy?',
        answer: `When you install a solar energy system on your property, you save money on your electricity bills and protect yourself against rising electricity rates in the future. How much you can save depends on your area's utility rates and solar policies, but going solar is a wise investment regardless of where you live.`,
    },
    {
        question: 'What are the environmental benefits of solar energy?',
        answer: 'Like other renewable energy resources, solar power has many environmental and health benefits. Going solar reduces greenhouse gas emissions, which contribute to climate change, and results in fewer air pollutants like sulfur dioxide and particulate matter, which can cause health problems.',
    },
    {
        question: 'How does solar impact my property values?',
        answer: 'Studies have shown that homes with solar energy systems sell for more than homes without them. However, your property value will only increase if you own, rather than lease, your solar panel system. Going solar will increase your property value more than a kitchen renovation in most parts of the country. We covered everything you need to know about selling your house with solar and the most important questions to ask your real estate agent before selling your home with solar panels.',
    },
    {
        question: 'How do solar panels work for my home?',
        answer: `If you're installing a solar system on your home, it makes sense that you're probably wondering how it converts sunlight to energy and what happens when events like blackouts occur. We've got all of the answers you need right here.`,
    },
    {
        question: `Do my solar panels produce power when the sun isn't shining?`,
        answer: `The amount of power your solar energy system can generate depends on sunlight. As a result, your solar panels will produce slightly less energy when the weather is cloudy and no energy at night. However, because of high electricity costs and financial incentives, solar is smart even if you live in a cloudy city.`
    },
    {
        question: `Will I still receive an electric bill if I have solar panels?`,
        answer: `Unless your solar energy system includes battery storage and you are fully off the grid, you will still receive a bill from your utility. However, you can dramatically reduce your bill or even cut the amount you owe to $0 with a solar panel system that matches your energy use.`
    },
    {
        question: `How long will my solar power system last?`,
        answer: `Solar panels are generally very durable and capable of withstanding snow, wind, and hail. The various components of your solar power system will need to be replaced at different times, but your system should continue to generate electricity for 25 to 35 years.`
    },
];

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