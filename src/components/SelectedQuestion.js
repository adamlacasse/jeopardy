import React, { useState } from "react";

export default (props) => {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="selected-question">
        {!showAnswer ? props.selectedQuestion.question : props.selectedQuestion.answer}
        {!showAnswer && <button onClick={() => setShowAnswer(true)}>See Answer</button>}
        <button onClick={() => props.setModalIsOpen(false)}>Cancel</button>
    </div>
  );
};
