import React from 'react'
import Logo from '../Logo.png'
import Russian from '../russia.png'
import English from '../english.png'

import '../styles.scss'

function Header(){
   return(
      <div className='header-wrapper'>
         <div className='header'>
            <div className='header-menu-container'>
               <img src={Logo} alt='img'></img>
               <div className='header-menu'>
                  <div className='home'>Home</div>
                  <div className='reviews'>Reviews</div>
                  <div className='free-trial'>Free Trial</div>
               </div>
               <div className='header-login-block'>
                  <button className='header-login'>LOGIN</button>
                  <div className='language-container'>
                     <div className='russian'>
                        <img src={Russian} alt='img'></img>
                     </div>
                     <div className='english'>
                        <img src={English} alt='img'></img>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header