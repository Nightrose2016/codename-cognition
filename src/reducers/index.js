import { combineReducers } from 'redux'
import quizzes from './quizzesReducer'
import exams from './examReducer'

export default combineReducers({
    quizzes,
    exams

})