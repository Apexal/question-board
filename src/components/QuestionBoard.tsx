import React, { useState } from "react";
import { Category, Question, QuestionPosition } from "../services/game";
import QuestionBoardCell from "./QuestionBoardCell";

import './QuestionBoard.css'

export type QuestionBoardPropTypes = {
  title: string;
  categories: Category[];
};
function QuestionBoard({ title, categories }: QuestionBoardPropTypes) {
  /** The number of rows in the question board. Might result in some empty cells if not all categories have the same number of questions. */
  const rowCount = categories.reduce((maxRow, cat) => Math.max(maxRow, cat.questions.length), 0);

  const [selectedQuestionPosition, setSelectedQuestionPosition] = useState<QuestionPosition>({
    categoryIndex: -1,
    questionIndex: -1
  })
  const hasQuestionSelected = selectedQuestionPosition.categoryIndex !== -1 && selectedQuestionPosition.questionIndex !== -1;
  const selectedQuestion: Question | null = hasQuestionSelected ? categories[selectedQuestionPosition.categoryIndex].questions[selectedQuestionPosition.questionIndex] : null

  const [revealedQuestionPositions, setRevealedQuestionPositions] = useState<QuestionPosition[]>([]);
  const isQuestionRevealed = ({ categoryIndex, questionIndex }: QuestionPosition) => revealedQuestionPositions.find(qp => qp.categoryIndex === categoryIndex && qp.questionIndex === questionIndex) !== undefined

  const questionIndices = Array.from(Array(rowCount).keys());

  function selectAndRevealQuestion(questionPosition: QuestionPosition) {
    if (!isQuestionRevealed(questionPosition)) {
      setRevealedQuestionPositions([...revealedQuestionPositions, questionPosition])
    }

    setSelectedQuestionPosition(questionPosition)
  }

  return (
    <div className="question-board">
      <h1>{title}</h1>
      {hasQuestionSelected &&
        (
          <div>
            <div>
              {selectedQuestion?.questionText}
            </div>
            <button onClick={() => setSelectedQuestionPosition({ questionIndex: -1, categoryIndex: -1 })}>Back</button>
          </div>
        )
      }
      {!hasQuestionSelected &&
        (
          <table>
            <thead>
              <tr>
                {categories.map((cat, categoryIindex) => <th key={categoryIindex}>{cat.title}</th>)}
              </tr>
            </thead>
            <tbody>
              {questionIndices.map(questionIndex => (
                <tr key={questionIndex}>
                  {categories.map((cat, categoryIndex) =>
                    <QuestionBoardCell
                      key={categoryIndex}
                      questionPosition={{ categoryIndex, questionIndex }}
                      question={cat.questions[questionIndex]}
                      isRevealed={isQuestionRevealed({ categoryIndex, questionIndex })}
                      handleSelect={selectAndRevealQuestion}
                    />
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
}

export default QuestionBoard;
