export default(state=[], action) => {

    switch(action.type){
        case "SET_QUIZZES":
            return [...action.payload]
        case "ADD_QUIZZES":
            return [...state, action.payload]
        default:
            return state
    }
}