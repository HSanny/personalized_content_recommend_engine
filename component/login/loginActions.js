import { SUBMIT_INFO, LOGIN } from "./loginTypes";

function submitInfo() {
    return {
        type: SUBMIT_INFO
    };
}

function login() {
    return {
        type: LOGIN
    };
}

const actionCreators = {
    submitInfo,
    login
};

export { actionCreators };