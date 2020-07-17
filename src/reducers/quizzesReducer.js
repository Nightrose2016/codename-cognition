const quizzesReducer = (state = { quizzes: [], loading: false }, action) => {
    switch(action.type) {
        case 'LOADING_Quizzes':
            return {
                ...state,
                quizzes: [...state.quizzes],
                loading: true
            }
        case 'ADD_Quiz':
            return {
                ...state,
                quizzes: action.quizzes,
                loading: false
            }
        default:
            return state;
    }
}

export default quizzesReducer;