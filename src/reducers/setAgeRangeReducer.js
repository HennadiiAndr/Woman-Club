import { SET_RANGE } from '../actions/action_types'
import { SET_FIRST_RANGE } from '../actions/action_types'
import { SET_SECOND_RANGE } from '../actions/action_types'
import { SET_THIRD_RANGE } from '../actions/action_types'
import { SET_FOURTH_RANGE } from '../actions/action_types'
import { SET_FIFTH_RANGE } from '../actions/action_types'

export const setAgeRangeReducer = (state = '', action) =>{
   switch(action.type) {
      case SET_RANGE:{
         const item = action.payload
         return state = item
      }
      case SET_SECOND_RANGE:{
         const item = action.payload
         return state = item
      }
      case SET_THIRD_RANGE:{
         const item = action.payload
         return state = item
      }
      case SET_FOURTH_RANGE:{
         const item = action.payload
         return state = item
      }
      case SET_FIFTH_RANGE:{
         const item = action.payload
         return state = item
      }
      default:
         return state
   }
}