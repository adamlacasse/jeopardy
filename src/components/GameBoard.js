import React, { useState } from "react";
import data from "../data/board1";

export default () => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const [openQuestion, setOpenQuestion] = useState();

  return (
    <div className="game-board">
      {data.map((category) => {
        return (
          <>
            <div className="square category">{category.categoryName}</div>
            {category.questions.map((question, index) => (
              <div className="square wager" onClick={() => setOpenQuestion(question)}>
                {formatter.format((index + 1) * 200)}
              </div>
            ))}
          </>
        );
      })}
    </div>
  );
};

const selectedQuestion = (props) => {

  return (
    <>
      <p>
        {props.question}
      </p>
    </>
  );
}
