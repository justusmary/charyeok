import constants from './constants'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case constants.ADD_NOTE:
            return {
                ...state,
                note: action.payload
            };
        default:
            return state;
    }
};

export default reducer