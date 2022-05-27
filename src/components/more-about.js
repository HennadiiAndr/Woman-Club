import React from 'react'
import More1 from '../assets/more1.png'
import More2 from '../assets/more2.png'
import More3 from '../assets/more3.png'
import More4 from '../assets/more4.png'
import More5 from '../assets/more5.png'

import '../styles.scss'

function MoreAbout(){
   return(
      <div className='more-about-block'>
         <div className='more-about'>
            <img src={More1} alt='img'></img>
            <div className='more-about-content'>
               <div className='more-about-wrapper'>
                  <div className='about-text-container'>
                     <div className='about-title'>Больше о Нелли</div>
                     <div className='about-text'>Университетский диплом кафедры физической<br/> Терапии.<br/>
                        С 2002 года работала учителем физической<br/> культуры и спорта в университете.<br/>
                        В университете я создала команду по спортивной аэробике<br/> и сделал ее региональным призером.<br/>
                        Изучил йогу и ее философию у нескольких<br/> учителей в Индии, Шри Ланки и Бали.<br/>
                        Пройдено 150 часов теории и практики Аюрведы<br/> и Ашанта йоги</div>
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