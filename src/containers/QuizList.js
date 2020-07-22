import React, { Component } from 'react'
import QuizItem from '../components/QuizItem'
import { connect } from 'react-redux'
import { fetchQuizzes } from '../actions/quizActions'

class QuizList extends Component {

  componentDidMount(){
    this.props.fetchQuizzes()
  }

  render() {
    const quizzes = this.props.quizzes.map(( quiz, i) => <QuizItem key={i} quiz={ quiz } />)
    return (
      <div>
        <h3 className="earwig">Quizzes</h3>
        <ul className="collection">
          { quizzes }
        </ul>
      </div>
    )
  }
}
  
const mapStateToProps = state => {
  return {
    quizzes: state.quizzes
  }
}
  
  
  
export default connect(mapStateToProps, {fetchQuizzes})(QuizList)