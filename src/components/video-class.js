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
   return(
      <div className='video-class-container'>
         <div className='video-class-block'>
            <div className='video-class-title'>Бесплатный видео урок массажа лица</div>
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
               >Бесплатный доступ</button>
               <div className='blue-block-up'></div>
               <div className='blue-block-down'></div>
            </div>
         </div>
      </div>
   )
}

export default VideoClass