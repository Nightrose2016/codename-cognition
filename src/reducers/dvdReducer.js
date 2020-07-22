export default(state=[], action) => {

    switch(action.type){
        case "SET_DVDS":
            return [...action.payload]
        case "ADD_DVDS":
            return [...state, action.payload]
        default:
            return state
    }
}