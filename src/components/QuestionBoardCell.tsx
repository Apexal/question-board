import React from "react";
import { Question, QuestionPosition } from "../services/game";

export type QuestionBoardCellPropTypes = {
  questionPosition: QuestionPosition;
  question: Question;
  handleSelect(): void;
};
function QuestionBoardCell({ questionPosition, question, handleSelect }: QuestionBoardCellPropTypes) {
  const questionLevel = questionPosition.questionIndex + 1;

  return (
    <td className={`question-board-cell level-${questionLevel}`} onClick={() => handleSelect()}>
      Level {questionLevel}
    </td>
  );
}

export default QuestionBoardCell;
