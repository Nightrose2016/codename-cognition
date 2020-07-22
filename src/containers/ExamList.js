import React, { Component } from 'react'
import ExamItem from '../components/items/ExamItem'
import { connect } from 'react-redux'
import { fetchExams } from '../actions/examsActions'

class ExamList extends Component {

  componentDidMount(){
    this.props.fetchExams()
  }

  render() {
    const exams = this.props.exams.map(( exam, a) => <ExamItem key={a} exam={ exam } />)
    return (
        <div>
            <h3 className="earwig">EXAms</h3>
            <ul className="exam-collection">
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