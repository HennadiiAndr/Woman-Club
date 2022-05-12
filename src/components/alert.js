import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { SET_VISIBILITY } from '../actions/action_types';
import { SET_EMAIL } from '../actions/action_types';
import { SET_RANGE } from '../actions/action_types';
import axios  from 'axios';

import '../styles.scss'

function Alert(){
   let className='alert-container';
   const visibility = useSelector((state) => state.visibility);
   const message = useSelector((state) => state.message);
   const data = useSelector((state) => state.data);
   const dispatch = useDispatch()
   if(visibility === 'true'){
      className = 'alert-container alert-showed'
   }else if(visibility === 'false'){
      className = 'alert-container'
   }
   const closeAlert = (visibility) =>{
      dispatch({
         type: SET_VISIBILITY,
         payload: visibility
      })
   }
   const resetEmail = (email) => {
      dispatch({
         type: SET_EMAIL,
         payload: email
      })
   }
   const resetRange = (range) => {
      dispatch({
         type: SET_RANGE,
         payload: range
      })
   }

   
   
   const postData = () => {
      axios.post('/send-email', data).then((res) => {console.log(res.data)});
      console.log(data);
   }
   return(
      <div className={className}>
         <div className ='alert-container-text'>{message}</div>
         <button 
            className='alert-button'
            onClick={() => {closeAlert('false'); resetEmail(''); resetRange(''); postData()}}
         >ok</button>
      </div>
   )
}

export default Alert