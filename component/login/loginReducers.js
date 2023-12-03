import { SUBMIT_INFO, LOGIN } from "./loginTypes";

// initial state
const initialState = {
    isLogin: false,
    accountNo: '',
    password: '',
}

// helper function
function applySubmitInfo(state) {
    return {
        ...state,
        isLogin: true,
    }
}

// reducer function
function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_INFO:
            // handle the action here using helper functions
            return applySubmitInfo(state);
        default:
            return state;
    }
}

export default loginReducer;