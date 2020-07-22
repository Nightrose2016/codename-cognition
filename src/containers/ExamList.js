import React, { Component } from 'react'
import ExamItem from '../components/ExamItem'
import { connect } from 'react-redux'
import { fetchExams } from '../actions/examsActions'

class ExamList extends Component {

  componentDidMount(){
    this.props.fetchExams()
  }

  render() {
    const exams = this.props.exams.map(( exam, i) => <ExamItem key={i} exam={ exam } />)
    return (
      <div>
        <h3>Exams</h3>
        <ul className="collection">
          { exams }
        </ul>
      </div>
    )
  }
}
  
const mapStateToProps = state => {
  return {
    exams: state.exams
  }
}
  
  
  
export default connect(mapStateToProps, {fetchExams})(ExamList)