import React, { useState, useEffect } from "react";

export default (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const returnToGameBoardOnEscape = (e) => {
    if (e.key === 'Escape') {
      props.setSelectedQuestion({});
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', returnToGameBoardOnEscape);
  }, []);

  useEffect(() => () => {
    window.removeEventListener('keydown', returnToGameBoardOnEscape);
  }, []);

  const handleCorrectAnswer = () => {
    props.selectedQuestion.isAnswered = true;
    props.setSelectedQuestion({});
  }

  return (
    <div className="selected-question">
      <div className="close-button-container">
        <div className="close-button" onClick={() => props.setSelectedQuestion({})}>X</div>
      </div>
      <div className="question-and-answer-text">
        {!showAnswer ? props.selectedQuestion.question : props.selectedQuestion.answer}
      </div>
      <div className="button-strip-bottom">
        {!showAnswer ? <a className="btn answer-button" onClick={() => setShowAnswer(true)}>See Answer</a>
          : <a className="btn answer-button" onClick={handleCorrectAnswer}>Someone Got It Right!</a>}
      </div>
    </div>
  );
};
