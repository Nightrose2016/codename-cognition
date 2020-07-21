export const fetchQuizzes = () => {
  return (dispatch) => {
    // dispatch({ type: 'LOADING_Quizzes'})
    return fetch('http://localhost:3001/quizzes')
    .then(response => response.json())
    .then(quizzes => {
      dispatch({ type: 'SET_QUIZZES', payload: 'quizzes' })
    })
  }
}