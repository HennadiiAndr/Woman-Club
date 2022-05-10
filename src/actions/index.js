import {SET_DATA} from './action_types';

export const setData = () => {
   return (dispatch, getState) => {
      const state = getState();
      const data = {
         email: '',
         range: ''
      }
      data.email = state.email;
      data.range = state.range;
      dispatch({type: SET_DATA, payload: data})
   }
}