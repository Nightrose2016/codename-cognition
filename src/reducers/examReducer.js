export default(state=[], action) => {

    switch(action.type){
        case "SET_Exams":
            return [...action.payload]
        case "ADD_Exams":
            return [...state, action.payload]
        default:
            return state
    }
}