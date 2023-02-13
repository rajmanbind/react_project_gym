import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
const FAQ = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(true);
  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button
          className="faq__icon"
          onClick={() => setIsAnswerShowing(!isAnswerShowing)}
        >
          {isAnswerShowing ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </div>
      <p style={{ display: `${isAnswerShowing ? "none " : "block"}` }}>
        {answer}
      </p>
    </article>
  );
};

export default FAQ;
