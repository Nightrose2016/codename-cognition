import React from 'react'
import { connect } from 'react-redux'

const QuizItem = ({ quiz }) => {
  return (
    <dl className="quiz-collection-item">
      <dt>Quiz Date: {quiz.quizdate}</dt>
      <dd>Answer: { quiz.quizanswer }</dd>
    </dl>
  );
}

export default connect(null)(QuizItem)
