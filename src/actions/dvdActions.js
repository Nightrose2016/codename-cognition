export const fetchDvds = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/dvds')
        .then(response => response.json())
        .then(dvds => {
            dispatch({ type: 'SET_DVDS', payload: dvds })
        })
    }
}