import { combineReducers } from "redux";
import variables from "./data/variable";
import error from "./error";
import history from "./history";
import functions from "./data/function";

const allReducers=combineReducers({
    history: history,
    error: error,
    variables: variables,
    functions: functions
});

export default allReducers;