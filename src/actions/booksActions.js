export const fetchBooks = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/books')
        .then(response => response.json())
        .then(books => {
            dispatch({ type: 'SET_BOOKS', payload: books })
        })
    }
}