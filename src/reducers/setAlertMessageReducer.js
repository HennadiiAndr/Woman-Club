import { SET_MESSAGE } from '../actions/action_types'

export const setAlertMessageReducer = (state = 'enter email', action) =>{
   switch(action.type) {
      case SET_MESSAGE :{
         const item = action.payload
         return state = item
      }
      default:
         return state
   }
}