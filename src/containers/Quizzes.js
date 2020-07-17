import React, { Component } from 'react'
import Quiz from '../components/Quiz'
import { connect } from 'react-redux'

class Quizzes extends Component {
    render() {
      const quizzes = this.props.quizzes.map(( quiz, i) => <Quiz key={i} quiz={ quiz } />)
      return (
        <div>
          <h3>Quizzes</h3>
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
  
  
  
  export default connect(mapStateToProps)(Quizzes)