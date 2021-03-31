import React from "react";
import { Question, QuestionPosition } from "../services/game";

import './QuestionBoardCell.css';

const maxQuestionLength = 50

export type QuestionBoardCellPropTypes = {
  questionPosition: QuestionPosition;
  question: Question;
  isRevealed: boolean;
  handleSelect(questionPosition: QuestionPosition): void;
};
function QuestionBoardCell({ questionPosition, question, isRevealed, handleSelect }: QuestionBoardCellPropTypes) {
  const questionLevel = questionPosition.questionIndex + 1;

  const shortenedText = question.questionText.length <= maxQuestionLength ? question.questionText : question.questionText.substring(0, maxQuestionLength).trim() + '...'

  return (
    <td className={`question-board-cell level-${questionLevel} ${isRevealed ? 'is-revealed' : ''}`} onClick={() => handleSelect(questionPosition)}>
      {!isRevealed && 
        <div>
          Level {questionLevel}
        </div>
      }
      {isRevealed &&
        <div>
          {shortenedText}
        </div>
      }
    </td>
  );
}

export default QuestionBoardCell;
