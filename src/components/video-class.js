import React from 'react'

import '../styles.scss'

function VideoClass(){
   return(
      <div className='video-class-container'>
         <div className='video-class-block'>
            <div className='video-class-title'>Free Facial Massage video class</div>
            <div className='email-input-container'>
               <input className='email-input' placeholder='email'></input>
               <button className='get-free'>Get FREE access</button>
               <div className='blue-block-up'></div>
               <div className='blue-block-down'></div>
            </div>
         </div>
      </div>
   )
}

export default VideoClass