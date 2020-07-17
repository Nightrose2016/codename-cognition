export const fetchQuizzes = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_Quizzes'})
      fetch('http://localhost:3001/quizzes').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_Quizzes', quizzes: responseJSON })
      })
    }
  }