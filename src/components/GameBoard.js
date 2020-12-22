import React, { useState } from "react";
import data from "../data/board1";

export default (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return (
      <div className="game-board">
        {props.data.map((category) => {
          return (
            <>
              <div className="square category">{category.categoryName}</div>
              {category.questions.map((question, index) => !question.isAnswered ? (
                <div
                  className="square wager"
                  onClick={() => props.setSelectedQuestion(question)}
                >
                  {/* TODO: is it double jeopardy or single jeopardy? do we need both? */}
                  {formatter.format((index + 1) * 200)}
                </div>
              ) : <div className="answered"></div>)}
            </>
          );
        })}
      </div>
  );
};
