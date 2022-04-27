import React from 'react'
import Image1 from '../rejuvenationimage.png'
import Image2 from '../forface.png'
import Image3 from '../mindsoul.png'
import Image4 from '../personaldevelopment.png'

import '../styles.scss'

function WhatWeDo(){
   return(
      <div className='whatwedo-wrapper'>
         <div className='whatwedo'>
            <div className='rejuvenation-block'>
               <div className='rejuvenation-image'>
                  <img src={Image1} alt='img'></img>
               </div>
               <div className='rejuvenation-content'>
                  <div className='what-we-do'>What We Do</div>
                  <div className='rejuvenation-title'>Natural rejuvenation<br/> techniques for body</div>
                  <div className='divider'></div>
                  <div className='rejuvenation-text-block'>
                     <div className='text-block'>(Self)-massage<br/>
                        Impact and vibration techniques<br/>
                        Lymphatic drainage techniques<br/>
                        Yoga<br/>
                        Mobilization of the spine and joints<br/>
                        Stretching techniques<br/>
                        Pilates<br/>
                        Mfr
                     </div>
                     <div className='text-block'>Posture, breath and gait correction<br/>
                        Breathing exercises<br/>
                        Relaxation techniques<br/>
                        Overall appearance training<br/>
                        Short workouts<br/>
                        Dancing
                     </div>
                  </div>
               </div>
            </div>
            <div className='rejuvenation-block'>
               <div className='rejuvenation-content'>
                  <div className='what-we-do'>What We Do</div>
                  <div className='rejuvenation-title'>Natural rejuvenation<br/> techniques for face</div>
                  <div className='divider'></div>
                  <div className='rejuvenation-text-block'>
                     <div className='text-block'>Internal settings for rejuvenation<br/>
                        Create Intention<br/>
                        Osteocorrection<br/>
                        Fascial massage techniques<br/>
                        Myofascial release<br/>
                        Guasha<br/>
                        Taping<br/>
                        Vacuum massage
                     </div>
                     <div className='text-block'>Lymphatic drainage and tightening<br/> 
                        massages<br/>
                        Work with facial expressions<br/>
                        Mewing
                     </div>
                  </div>
               </div>
               <div className='rejuvenation-image'>
                  <img src={Image2} alt='img'></img>
               </div>
            </div>
            <div className='rejuvenation-block'>
               <div className='rejuvenation-image'>
                  <img src={Image3} alt='img'></img>
               </div>
               <div className='rejuvenation-content'>
                  <div className='what-we-do'>What We Do</div>
                  <div className='rejuvenation-title'>Mind & Soul<br/> rejuvenation</div>
                  <div className='divider'></div>
                  <div className='rejuvenation-text-block'>
                     <div className='text-block'>Meditations (quantum, meta, alpha,<br/> 
                        relaxation, revitalizing, Vipassana,<br/>
                         female, attunement, rejuvenation)<br/>
                        Anti-stress techniques<br/>
                        -Breathing techniques<br/>
                        -Switch to alpha waves<br/>
                        4D settings<br/>
                        Working with settings
                     </div>
                     <div className='text-block'>Inclusion of the observer<br/>
                        Settings for the new you<br/>
                        Practicing elevated emotions<br/>
                        Working with emotions<br/>
                        Quantum rejuvenation
                     </div>
                  </div>
               </div>
            </div>
            <div className='rejuvenation-block'>
               <div className='rejuvenation-content'>
                  <div className='what-we-do'>What We Do</div>
                  <div className='rejuvenation-title'>Personal Development</div>
                  <div className='divider'></div>
                  <div className='rejuvenation-text-block'>
                     <div className='text-block'>Mindset training<br/>
                        Good Day<br/>
                        Essays with experts on current topics<br/>
                        Educational broadcasts in the field of<br/>
                         health, youth, beauty, spiritual growth
                     </div>
                     <div className='text-block'>Nutrition and detox tips<br/>
                        Develop good habits<br/>
                        Planning for success
                     </div>
                  </div>
               </div>
               <div className='rejuvenation-image'>
                  <img src={Image4} alt='img'></img>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WhatWeDo