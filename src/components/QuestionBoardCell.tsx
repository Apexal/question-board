import React from "react";
import { Question, QuestionPosition } from "../services/game";

export type QuestionBoardCellPropTypes = {
  questionPosition: QuestionPosition;
  question: Question;
  isRevealed: boolean;
  handleSelect(questionPosition: QuestionPosition): void;
};
function QuestionBoardCell({ questionPosition, question, isRevealed, handleSelect }: QuestionBoardCellPropTypes) {
  const questionLevel = questionPosition.questionIndex + 1;

  return (
    <td className={`question-board-cell level-${questionLevel}`} onClick={() => handleSelect(questionPosition)}>
      {!isRevealed && 
        <div>
          Level {questionLevel}
        </div>
      }
      {isRevealed &&
        <div>
          {question.questionText}
        </div>
      }
    </td>
  );
}

export default QuestionBoardCell;
