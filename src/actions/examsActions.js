export const fetchExams = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/exams')
        .then(response => response.json())
        .then(exams => {
            dispatch({ type: 'SET_EXAMS', payload: exams })
        })
    }
  }