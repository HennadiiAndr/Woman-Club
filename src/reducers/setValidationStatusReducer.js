import { SET_STATUS } from "../actions/action_types";

export const setValidationStatusReducer = (state = 'enter email', action) =>{
   switch(action.type) {
      case SET_STATUS:{
         const item = action.payload
         return state = item
      }
      default:
         return state
   }
}