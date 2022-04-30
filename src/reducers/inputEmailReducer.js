import { SET_EMAIL } from "../actions/action_types"

export const inputEmailReducer = (state = '', action) =>{
   switch(action.type) {
      case SET_EMAIL:{
         const item = action.payload
         return state = item
      }
      default:
         return state
   }
}