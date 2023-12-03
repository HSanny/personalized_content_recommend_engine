import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../component/login/loginReducers";

export default combineReducers({
    login: loginReducer
});