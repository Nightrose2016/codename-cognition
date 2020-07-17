import React from 'react'
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    return (
    <li className="collection-item">
      Quiz Date: {quiz.quizdate}<br />
      Answer: { quiz.aanswer } <br />
      {/* <Link to={`/quizzes/${quiz.id}`}>View</Link> */}
    </li>
    );
}

export default Quiz
