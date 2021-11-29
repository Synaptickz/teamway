export interface Answer {
  score: number,
  answer: string
  checked?: boolean
}

export interface QuestionAnswer {
  question: string,
  questionId: number,
  answers: Array<Answer>
}
