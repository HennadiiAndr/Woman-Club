import React from 'react'
import Flowers from '../assets/flowers.png'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { SET_RANGE } from '../actions/action_types'
import { SET_VISIBILITY } from '../actions/action_types'
import { useSelector } from 'react-redux'
import { setData } from '../actions'

import '../styles.scss'

function Results(props){
   const range = useSelector((state) => state.range)
   const dispatch = useDispatch()
   const setRange = (range) =>{
      dispatch({
         type: SET_RANGE,
         payload: range
      })
      setVisibility('true');
      props.setData()
   }
   const setVisibility = (visibility) =>{
      dispatch({
         type: SET_VISIBILITY,
         payload: visibility
      })
   }
   return(
      <div className='results-block'>
         <div className='results'>
            <div className='results-title-block'>
               <div className='results-title'>
                  Для кого это и каких результатов<br/> 
                  ты можешь ожидать?
               </div>
               <div className='age-select-block'>
                  <div 
                     className={'age-select' + (range === '20-25' ? ' selected' : '')}
                     onClick={() => {setRange('20-25')}}>Тебе 20-25 лет?
                  </div>
                  <div 
                     className={'age-select' + (range === '26-35' ? ' selected' : '')}
                     onClick={() => {setRange('26-35')}}>Тебе 26-35 лет?
                  </div>
                  <div 
                     className={'age-select' + (range === '36-45' ? ' selected' : '')}
                     onClick={() => {setRange('36-45')}}>Тебе 36-45 лет?
                  </div>
                  <div 
                     className={'age-select' + (range === '46-55' ? ' selected' : '')}
                     onClick={() => {setRange('46-55')}}>Тебе 46-55 лет?
                  </div>
                  <div 
                     className={'age-select' + (range === 'over 55' ? ' selected' : '')} 
                     onClick={() => {setRange('over 55')}}>Тебе больше 55?
                  </div>
               </div>
            </div>
            <div className='motivation-block'>
               <div className='motivation-picture-block'>
                  <div className='content-block'>
                     <div className='motivation-text'>Расцвет жизни, опыт и красота!<br/><br/>
                        Время сознательно наслаждаться своей жизнью и собой!<br/> Вспомни свои мечты и верни<br/> себя к лучшей версии!
                     </div>
                  </div>
                  <img src={Flowers} alt='img' className='motivation-picture'></img>
               </div>
               <div className='down-text-container'>
                  <div className='down-text'>
                     <div className='down-title'>
                        Факторы риска для лица:
                     </div>
                     <div className='text'>Многолетняя привычка хмуриться, щуриться, сжимать челюсти<br/> а губы, выдвигая шею вперед, сутулясь - уже четче<br/> проявляется кольцами Венеры, носогубными складками, межбровьем, бровями.<br/>
                        Накопившийся стресс меняет характер дыхания, что<br/> приводит к напряжению в плечах и диафрагме, и из-за это<br/> провоцирует постоянные отеки на шее и лице.<br/>
                        Возраст выдает осан, походка, нечеткая линия челюсти, приподнятые плечи,<br/> способ мышления.
                     </div>
                  </div>
                  <div className='down-text'>
                     <div className='down-title'>
                        Клуб поможет тебе:
                     </div>
                     <div className='text'>Вернуть открытый взгляд, четкие линии лица, высокие скулы, ухоженный<br/>внешний вид.<br/>
                        Узнайте природу деформации лица и попрактикуйтесь в ее восстановлении.<br/>
                        Вернуть характер дыхания, снять утреннюю отечность.<br/>
                        Работа с мимикой, эмоциями, внутренним состоянием.<br/>
                        Снять накопившийся стресс и напряжение.<br/>
                        Вернуть осанку, походку и состояние королевы.<br/>
                        Пришло время покорить мир!
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default connect(null, {setData})(Results)