const initialState = {}

const addEventMethod = (state=initialState, action) => {
    switch(action.type) {
        case 'addEvent': 
            return action.payload
        default:
            return state;
    }
}

export default addEventMethod;