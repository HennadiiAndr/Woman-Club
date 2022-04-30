import React from 'react'
import Flowers from '../flowers.png'
import { useDispatch } from 'react-redux'
import { SET_RANGE } from '../actions/action_types'
import { SET_FIRST_RANGE } from '../actions/action_types'
import { SET_SECOND_RANGE } from '../actions/action_types'
import { SET_THIRD_RANGE } from '../actions/action_types'
import { SET_FOURTH_RANGE } from '../actions/action_types'
import { SET_FIFTH_RANGE } from '../actions/action_types'

import '../styles.scss'

function Results(){
   const dispatch = useDispatch()
   const setRange = (range) =>{
      dispatch({
         type: SET_RANGE,
         payload: range
      })
   }
   const rangeOne = () =>{
      dispatch({
         type: SET_FIRST_RANGE,
         payload: '20-25'
      })
   }
   const rangeTwo = () =>{
      dispatch({
         type: SET_SECOND_RANGE,
         payload: '26-35'
      })
   }
   const rangeThree = () =>{
      dispatch({
         type: SET_THIRD_RANGE,
         payload: '36-45'
      })
   }
   const rangeFour = () =>{
      dispatch({
         type: SET_FOURTH_RANGE,
         payload: '46-55'
      })
   }
   const rangeFive = () =>{
      dispatch({
         type: SET_FIFTH_RANGE,
         payload: 'over 55'
      })
   }
   return(
      <div className='results-block'>
         <div className='results'>
            <div className='results-title-block'>
               <div className='results-title'>
                  For who is this and what<br/> 
                  results can you expect?
               </div>
               <div className='age-select-block'>
                  <div className='age-select' onClick={() => setRange('20-25')}>Are you 20-25 years old?</div>
                  <div className='age-select' onClick={() => setRange('26-35')}>Are you 26-35 years old?</div>
                  <div className='age-select' onClick={() => setRange('36-45')}>Are you 36-45 years old?</div>
                  <div className='age-select' onClick={() => setRange('46-55')}>Are you 46-55 years old?</div>
                  <div className='age-select' onClick={() => setRange('over 55')}>Are you over 55?</div>
               </div>
            </div>
            <div className='motivation-block'>
               <div className='motivation-picture-block'>
                  <div className='content-block'>
                     <div className='motivation-text'>The heyday of life, experience and beauty!<br/><br/>
                        Time to consciously enjoy your life and<br/> yourself! Recall your dreams and return<br/> yourself to the best version!
                     </div>
                  </div>
                  <img src={Flowers} alt='img' className='motivation-picture'></img>
               </div>
               <div className='down-text-container'>
                  <div className='down-text'>
                     <div className='down-title'>
                        Risk factors for the face:
                     </div>
                     <div className='text'>A long-term habit of frowning, squinting, clenching the jaws<br/> and lips, pushing the neck forward, stooping - is already more clearly<br/> manifested by the rings of venus, nasolabial folds, interbrow, jowls.<br/>
                        The accumulated stress changes the nature of breathing, which<br/> causes tension in the shoulders and diaphragm, and therefore<br/> provokes persistent swelling in the neck and face.<br/>
                        Age is betrayed by posture, gait, fuzzy jaw line, raised shoulders,<br/> way of thinking.
                     </div>
                  </div>
                  <div className='down-text'>
                     <div className='down-title'>
                        The club will help you:
                     </div>
                     <div className='text'>Return an open look, clear facial lines, high cheekbones, well<br/>-groomed appearance.<br/>
                        Learn the nature of facial deformity and practice its restoration.<br/>
                        Return the nature of breathing, relieve morning swelling.<br/>
                        Work with facial expressions, emotions, internal state.<br/>
                        Relieve accumulated stress and tension.<br/>
                        Return the posture, gait and state of the queen.<br/>
                        It's time to conquer the world!
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Results