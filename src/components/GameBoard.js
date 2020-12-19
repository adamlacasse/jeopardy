import React, { useState } from "react";
import Modal from "react-modal";
import SelectedQuestion from "./SelectedQuestion";
import data from "../data/board1";

export default () => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState();

  const handleQuestionSelection = (question) => {
    setSelectedQuestion(question);
    setModalIsOpen(true);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen}>
        <SelectedQuestion
          selectedQuestion={selectedQuestion}
          setModalIsOpen={setModalIsOpen}
        />
      </Modal>
      <div className="game-board">
        {data.map((category) => {
          return (
            <>
              <div className="square category">{category.categoryName}</div>
              {category.questions.map((question, index) => (
                <div
                  className="square wager"
                  onClick={() => handleQuestionSelection(question)}
                >
                  {/* TODO: is it double jeopardy or single jeopardy? do we need both? */}
                  {formatter.format((index + 1) * 200)}
                </div>
              ))}
            </>
          );
        })}
      </div>
    </>
  );
};
