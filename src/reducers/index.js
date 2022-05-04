import { combineReducers } from "redux";
import { inputEmailReducer } from "./inputEmailReducer";
import { setAgeRangeReducer } from "./setAgeRangeReducer";
import { setValidationStatusReducer } from "./setValidationStatusReducer";
import { setAlertVisibilityReducer } from './setAlertVisibilityReducer'

const AllReducers = combineReducers({
   email: inputEmailReducer,
   range: setAgeRangeReducer,
   status: setValidationStatusReducer,
   visibility: setAlertVisibilityReducer
})

export default AllReducers