import React from 'react'
import More1 from '../more1.png'
import More2 from '../more2.png'
import More3 from '../more3.png'
import More4 from '../more4.png'
import More5 from '../more5.png'

import '../styles.scss'

function MoreAbout(){
   return(
      <div className='more-about-block'>
         <div className='more-about'>
            <img src={More1} alt='img'></img>
            <div className='more-about-content'>
               <div className='more-about-wrapper'>
                  <div className='about-text-container'>
                     <div className='about-title'>More about Nelli</div>
                     <div className='about-text'>University Diploma of the Department of Physical<br/> Therapy.<br/>
                        Since 2002 she worked as a teacher of physical<br/> culture and sports at the university.<br/>
                        At the University I created a team of sports aerobics<br/> and brought it to the regional prizewinners.<br/>
                        Learned yoga and its philosophy from a variety of<br/> teachers in India, Sri Lanka and Bali.<br/>
                        Passed 150 hours of theory and practice of Ayurveda<br/> and Ashtanga yoga</div>
                  </div>
                  <img src={More2} alt='img'></img>
               </div>
               <div className='more-about-pics'>
                  <img src={More3} alt='img'></img>
                  <img src={More4} alt='img'></img>
                  <img src={More5} alt='img'></img>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MoreAbout