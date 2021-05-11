import { combineReducers } from "redux";
import variables from "./data/variable";
import error from "./error";
import history from "./history";
import functions from "./data/function";
import pager from "./pager";

const allReducers=combineReducers({
    history: history,
    error: error,
    variables: variables,
    functions: functions,
    pager: pager
});

export default allReducers;