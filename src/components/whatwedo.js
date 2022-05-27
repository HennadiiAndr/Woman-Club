import React from 'react'
import Image1 from '../assets/rejuvenationimage.png'
import Image2 from '../assets/forface.png'
import Image3 from '../assets/mindsoul.png'
import Image4 from '../assets/personaldevelopment.png'

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
                  <div className='what-we-do'>Что Мы Делаем</div>
                  <div className='rejuvenation-title'>Техники натурального<br/> омоложения тела</div>
                  <div className='divider'></div>
                  <div className='rejuvenation-text-block'>
                     <div className='text-block'>(Само)-массаж<br/>
                        Ударные и вибрационные техники<br/>
                        Техники дренажа лимфы<br/>
                        Йога<br/>
                        Мобилизация спины и суставов<br/>
                        Техники растяжки<br/>
                        Пилатес<br/>
                        Mfr
                     </div>
                     <div className='text-block'>Корректировка осанки, походки и дыхания<br/>
                        Дыхательные упражнения<br/>
                        Техники релаксации<br/>
                        Тренировка общего вида<br/>
                        Короткие тренировки<br/>
                        Танцы
                     </div>
                  </div>
               </div>
            </div>
            <div className='rejuvenation-block'>
               <div className='rejuvenation-content'>
                  <div className='what-we-do'>Что Мы Делаем</div>
                  <div className='rejuvenation-title'>Техники натурального<br/> омоложения лица</div>
                  <div className='divider'></div>
                  <div className='rejuvenation-text-block'>
                     <div className='text-block'>Внутренние установки для омоложения<br/>
                        Создать намерение<br/>
                        Остеокоррекция<br/>
                        Тахники фасциального массажа<br/>
                        Миоафасциальный релиз<br/>
                        Гуаша<br/>
                        Тейпинг<br/>
                        Ваккумный массаж
                     </div>
                     <div className='text-block'>Лимфодренаж и подтяжка<br/> 
                        Работа с мимикой<br/>
                        Мьюинг
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
                  <div className='what-we-do'>Что Мы Делаем</div>
                  <div className='rejuvenation-title'>Омоложение<br/> мыслей и души</div>
                  <div className='divider'></div>
                  <div className='rejuvenation-text-block'>
                     <div className='text-block'>Медитации (Квантум, мета, альфа,<br/> 
                        релаксация, ревитализация, Випассана,<br/>
                         женская настройка, омоложение)<br/>
                         Антистрессовые техники<br/>
                        -Дыхательные техники<br/>
                        -Переключение на альфа волны<br/>
                        4D установки<br/>
                        Работа с установками
                     </div>
                     <div className='text-block'>Включение наблюдателя<br/>
                        Установки для новой тебя<br/>
                        Практика приподнятых эмоций<br/>
                        Работа с эмоциями<br/>
                        Квантовое омоложение
                     </div>
                  </div>
               </div>
            </div>
            <div className='rejuvenation-block'>
               <div className='rejuvenation-content'>
                  <div className='what-we-do'>Что Мы Делаем</div>
                  <div className='rejuvenation-title'>Личностное развитие</div>
                  <div className='divider'></div>
                  <div className='rejuvenation-text-block'>
                     <div className='text-block'>Тренировка мышления<br/>
                        Хороший день<br/>
                        Эссе экспертнов на соответствующие темы<br/>
                        обучающие трансляции в сфере<br/>
                         здоровья, молодости, красоты, духовного роста
                     </div>
                     <div className='text-block'>Советы по диетологии и детоксу<br/>
                        Развитие хороших привычек<br/>
                        Планирование успеха
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