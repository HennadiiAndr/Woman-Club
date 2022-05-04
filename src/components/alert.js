import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { SET_VISIBILITY } from '../actions/action_types';
import { SET_EMAIL } from '../actions/action_types';

import '../styles.scss'

function Alert(){
   let className='alert-container';
   const visibility = useSelector((state) => state.visibility);
   const status = useSelector((state) => state.status);
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
   return(
      <div className={className}>
         <div className ='alert-container-text'>{status}</div>
         <button 
            className='alert-button'
            onClick={() => {closeAlert('false'); resetEmail('')}}
         >ok</button>
      </div>
   )
}

export default Alert