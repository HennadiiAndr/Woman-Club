import { combineReducers } from "redux";
import { inputEmailReducer } from "./inputEmailReducer";
import { setAgeRangeReducer } from "./setAgeRangeReducer";
import { setAlertMessageReducer } from "./setAlertMessageReducer";
import { setAlertVisibilityReducer } from './setAlertVisibilityReducer'

const AllReducers = combineReducers({
   email: inputEmailReducer,
   range: setAgeRangeReducer,
   message: setAlertMessageReducer,
   visibility: setAlertVisibilityReducer
})

export default AllReducers