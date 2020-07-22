import React from 'react'
import { connect } from 'react-redux'

const ExamItem = ({ exam }) => {
    return (
        <dl className="exam-collection">
            <dt>Exam Dates: {exam.examdate}</dt>
            <dd>Answer: { exam.examanswers }</dd>
        </dl>
    );
}

export default connect(null)(ExamItem)