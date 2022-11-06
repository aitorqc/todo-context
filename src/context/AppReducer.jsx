export default function appReducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload];

        case "REMOVE_TASK":
            return state.filter(task => task.id !== action.payload);

        case "EDIT_TASK":
            const newState = state.filter(task => task.id !== action.payload.id);
            return [...newState, action.payload];

        default:
            break;
    }

}