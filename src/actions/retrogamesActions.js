export const fetchRetroGames = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/retrogames')
        .then(response => response.json())
        .then(retrogames => {
            dispatch({ type: 'SET_RETROGAMES', payload: retrogames })
        })
    }
}