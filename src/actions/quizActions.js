export const fetchQuizzes = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/quizzes.json').then(response => {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: })
        })
    }
}