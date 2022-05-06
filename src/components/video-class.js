import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SET_EMAIL } from '../actions/action_types'
import { SET_MESSAGE } from '../actions/action_types'
import { emailValidation } from '../utils'


import '../styles.scss'

function VideoClass(){
   
   const email = useSelector((state)=>state.email)
   const dispatch = useDispatch()
   const handleInput = (email) => {
      dispatch({
         type: SET_EMAIL,
         payload: email
      })
      emailValidation(email, setMessage)
   }
   const setMessage = (message) =>{
      dispatch({
         type: SET_MESSAGE,
         payload: message
      })
   }
   const onClickHandler = () =>{
      window.scroll(0,4600)
   }
   /*const emailValidation = (email) =>{
      const regEx= /[a-zA-Z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
      if(regEx.test(email)){
         setMessage('we sent you all materials')
      }else if(!regEx.test(email)&& email !==''){
         setMessage('enter valid email')
      }else{
         setMessage('enter email')
      }
   }*/
   return(
      <div className='video-class-container'>
         <div className='video-class-block'>
            <div className='video-class-title'>Free Facial Massage video class</div>
            <div className='email-input-container'>
               <input 
                  className='email-input' 
                  placeholder='email'
                  onChange={(e)=>{handleInput(e.target.value)}}
                  value={email}
               ></input>
               <button 
                  className='get-free'
                  onClick={onClickHandler}
               >Get FREE access</button>
               <div className='blue-block-up'></div>
               <div className='blue-block-down'></div>
            </div>
         </div>
      </div>
   )
}

export default VideoClass