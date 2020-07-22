export default(state=[], action) => {

    switch(action.type){
        case "SET_MOVIES":
            return [...action.payload]
        case "ADD_MOVIES":
            return [...state, action.payload]
        default:
            return state
    }
}