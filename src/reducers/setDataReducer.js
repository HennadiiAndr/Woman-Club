import { SET_DATA } from '../actions/action_types';


export const setDataReducer = (state = {}, action) =>{
   switch(action.type) {
      case SET_DATA:{
         return state = action.payload
      }
      default:
         return state
   }
}