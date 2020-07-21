import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';

const QuizItem = ({ quiz }) => {
  return (
    <dl className="collection-item">
      <dt>Quiz Date: {quiz.quizdate}</dt><br />
      <dd>Answer: { quiz.quizanswer }</dd> <br />
      {/* <Link to={`/quizzes/${quiz.id}`}>View</Link> */}
    </dl>
  );
}

export default connect(null)(QuizItem)
