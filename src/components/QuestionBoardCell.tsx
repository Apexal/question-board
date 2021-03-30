import React from "react";
import { Question } from "../services/game";

export type QuestionBoardCellPropTypes = {
  questionIndex: number;
  question: Question;
  handleSelect(question: Question): void;
};
function QuestionBoardCell({ questionIndex, question, handleSelect }: QuestionBoardCellPropTypes) {
  const questionLevel = questionIndex + 1;

  return (
    <td className={`question-board-cell level-${questionLevel}`}>
      Level {questionLevel}
    </td>
  );
}

export default QuestionBoardCell;
