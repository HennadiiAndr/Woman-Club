import React from 'react'
import Logo from '../Logo.png'
import Russian from '../russia.png'
import English from '../english.png'
import HeaderImage from '../headerimage.png'
import BigStar from '../smoothcorner.png'
import Tree from '../tree.jpg'

import '../styles.scss'

function Header(){
   const onClickHandler=()=>{
      window.scroll(0,4200)
   }
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
            <div className='look-feel-container'>
               <div className='content-block'>
                  <div className='content-wrapper'>
                     <div className='content-text-up'>Feel at home and become your New<br/> You in a matter of weeks</div>
                     <div className='content-title'>Look and feel great at any age!</div>
                     <div className='content-text-down'>We teach you a combination of proven natural<br/> rejuvenation techniques in online classes<br/>
                        (face, body, mind and soul), in a beautiful<br/> 
                        community of like-minded women.
                     </div>
                     <button 
                        className='try-us'
                        onClick={onClickHandler}
                     >Try us free for 7 days</button>
                  </div>
               </div>
               <div className='image-block'>
                  <img src={HeaderImage} alt='img'></img>
                  <img src={BigStar} alt='img' className='big-star'></img>
                  <img src={BigStar} alt='img' className='little-star'></img>
                  <img src={Tree} alt='img' className='tree'></img>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header