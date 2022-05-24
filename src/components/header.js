import React from 'react'
import Logo from '../assets/Logo.png'
import HeaderImage from '../assets/headerimage.png'
import BigStar from '../assets/smoothcorner.png'
import Tree from '../assets/tree.jpg'

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
               
               </div>
               <div className='header-login-block'>
                  
               </div>
            </div>
            <div className='look-feel-container'>
               <div className='content-block'>
                  <div className='content-wrapper'>
                     <div className='content-text-up'>Чувствуйте себя как дома и станьте новой версией Себя буквально за недели</div>
                     <div className='content-title'>Выгляди и чувствуй себя прекрасно в любом возрасте</div>
                     <div className='content-text-down'>Мы научим Вас комибанции натуральных<br/> технологий омоложения на онлайн занятиях<br/>
                        (лицо, тело, мысли и душа), в красивом<br/> 
                        обществе женщин единомышленниц.
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