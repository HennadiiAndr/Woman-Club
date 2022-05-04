import { SET_VISIBILITY } from '../actions/action_types'

export const setAlertVisibilityReducer = (state = '', action) =>{
   switch(action.type) {
      case SET_VISIBILITY:{
         const item = action.payload
         return state = item
      }
      default:
         return state
   }
}