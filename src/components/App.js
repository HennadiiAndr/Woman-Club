import React from 'react'


import '../styles.scss'
import Header from './header'
import WhatWeDo from './whatwedo'
import Achievements from './achievements'
import VideoClass from './video-class'
import Results from './results'
import MoreAbout from './more-about'
import Alert from './alert'

function App(){
   return <div className='main'>
      <div className='mainflow'>
         <Alert/>
         <Header/>
         <WhatWeDo/>
         <Achievements/>
         <VideoClass/>
         <Results/>
         <MoreAbout/>
      </div>
   </div>
}

export default App