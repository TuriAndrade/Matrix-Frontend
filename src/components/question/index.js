import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Question({ heading, answer }) {
  const [answerIn, setAnswerIn] = useState(false);

  return (
    <div
      className="question"
      onClick={() => setAnswerIn((prevstate) => !prevstate)}
    >
      <h1 className="question__heading">{heading}</h1>
      <CSSTransition
        timeout={{ enter: 800, exit: 500 }}
        in={answerIn}
        classNames="question__answer"
        unmountOnExit
      >
        <div className="question__answer">{answer}</div>
      </CSSTransition>
    </div>
  );
}
