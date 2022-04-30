import { SET_RANGE } from '../actions/action_types'

export const setAgeRangeReducer = (state = '', action) =>{
   switch(action.type) {
      case SET_RANGE:{
         const item = action.payload
         return state = item
      }
      default:
         return state
   }
}