import React, { useState }  from "react";
import GameBoard from './GameBoard';
import SelectedQuestion from "./SelectedQuestion";
import data from "../data/board1";

export default () => {
  const [selectedQuestion, setSelectedQuestion] = useState({});

  return (
    <div className="app">
      {!selectedQuestion.question ?
        <GameBoard
          data={data}
          setSelectedQuestion={setSelectedQuestion}
        /> :
        <SelectedQuestion
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
        />
      }
    </div>
  );
};
