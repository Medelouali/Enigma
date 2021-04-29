import { combineReducers } from "redux";
import error from "./error";
import history from "./history";

const allReducers=combineReducers({
    history: history,
    error: error
});

export default allReducers;