export default(state=[], action) => {

    switch(action.type){
        case "SET_EXAMS":
            return [...action.payload]
        case "ADD_EXAMS":
            return [...state, action.payload]
        default:
            return state
    }
}