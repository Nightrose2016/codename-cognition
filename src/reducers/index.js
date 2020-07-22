import { combineReducers } from 'redux'
import quizzes from './quizzesReducer'
import exams from './examReducer'
import retrogames from './retrogameReducer'
import books from './bookReducer'
import dvds from "./dvdReducer";
import movies from "./movieReducer";

export default combineReducers({
    quizzes,
    exams,
    movies,
    dvds,
    books,
    retrogames

})