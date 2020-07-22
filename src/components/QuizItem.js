import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';

const QuizItem = ({ quiz }) => {
  return (
    <dl className="quiz-collection-item">
      <dt>Quiz Date: {quiz.quizdate}</dt>
      <dd>Answer: { quiz.quizanswer }</dd>
      {/* <Link to={`/quizzes/${quiz.id}`}>View</Link> */}
    </dl>
  );
}

export default connect(null)(QuizItem)
