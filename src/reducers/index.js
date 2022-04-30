import { combineReducers } from "redux";
import { inputEmailReducer } from "./inputEmailReducer";
import { setAgeRangeReducer } from "./setAgeRangeReducer"

const AllReducers = combineReducers({
   email: inputEmailReducer,
   range: setAgeRangeReducer
})

export default AllReducers