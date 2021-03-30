/** Represents a Question that can be viewed once
 * and then remains revealed. */
export interface Question {
    /** The level of the question. Lower is easier. */
    level: number;
    questionText: string;
    answerText: string;
    isRevealed: boolean;
}

/**
 * Represents a category of related questions.
 */
export interface Category {
    title: string;
    questions: Question[];
}