import React from "react";
import SectionHeader from "./SectionHeader";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ.jsx";
const FAQs = () => {

  return (
    <div className="faqs">
      <div className="container faqs__container">
        <SectionHeader icon={<FaQuestion />} title="FAQs" />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => (
            <FAQ key={id} question={question} answer={answer} />
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default FAQs;
