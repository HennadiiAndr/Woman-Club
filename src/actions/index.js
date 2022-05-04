import { SET_STATUS } from "./action_types";

export const setStatus = (status) =>{
   return (dispatch) => {
      dispatch({
         type: SET_STATUS,
         payload: status
      })
   }
}