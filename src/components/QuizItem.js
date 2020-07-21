import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';

const QuizItem = ({ quiz }) => {
  return (
    <li className="collection-item">
      Quiz Date: {quiz.quizdate}<br />
      Answer: { quiz.answer } <br />
      {/* <Link to={`/quizzes/${quiz.id}`}>View</Link> */}
    </li>
  );
}

export default connect(QuizItem)
