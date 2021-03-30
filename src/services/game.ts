/** Represents a Question that can be viewed once
 * and then remains revealed. */
export interface Question {
    questionText: string;
    answerText: string;
    isRevealed: boolean;
}

export interface QuestionPosition {
    categoryIndex: number;
    questionIndex: number;
}

/**
 * Represents a category of related questions.
 */
export interface Category {
    /** Visible name of the category */
    title: string;
    /** Questions for this category */
    questions: Question[];
}