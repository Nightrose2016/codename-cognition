export const fetchMovies = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/movies')
        .then(response => response.json())
        .then(movies => {
            dispatch({ type: 'SET_MOVIES', payload: movies })
        })
    }
}