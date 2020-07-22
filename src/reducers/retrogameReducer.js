export default(state=[], action) => {

    switch(action.type){
        case "SET_RETROGAMES":
            return [...action.payload]
        case "ADD_RETROGAMES":
            return [...state, action.payload]
        default:
            return state
    }
}