import React from "react";
import Community from '../assets/community.png'
import Coaching from '../assets/coaching.png'
import File from '../assets/file.png'
import Key from '../assets/key.png'
import OnlineClass from '../assets/onlineclass.png'
import Lotus from '../assets/lotus.png'

import '../styles.scss'

function Achievements(){
   return(
      <div className='achievemens-block'>
         <div className='achievements'>
            <div className='achievements-title'>Что ты получишь в клубе?</div>
            <div className='achievements-container'>
               <div className="benefit">
                  <img src={Lotus} alt='img'></img>
                  <div className="badge">часть 1</div>
                  <div className="benefit-title">Полная программа</div>
                  <div className="benefit-text">Клуб Новая Ты это все что тебе нужно<br/> Лицо, тело, осанка, йога, тренировки, медитация,<br/> личностный рост, уверенность в себе<br/> повышение,...</div>
               </div>
               <div className="benefit">
                  <img src={OnlineClass} alt='img'></img>
                  <div className="badge">часть 2</div>
                  <div className="benefit-title">Ежедневные занятия (записанные)</div>
                  <div className="benefit-text">у нас новые занятия каждую неделю <br/> которые Вы можете смотреть на стриме или позже<br/> момент.</div>
               </div>
               <div className="benefit">
                  <img src={Key} alt='img'></img>
                  <div className="badge">часть 3</div>
                  <div className="benefit-title">Доступ к нескольким (мини)-курсам</div>
                  <div className="benefit-text">-Вы получите доступ к нескольким курсам (см.<br/> ниже) с новыми курсами которые добавляются каждый<br/> месяц.</div>
               </div>
               <div className="benefit">
                  <img src={Coaching} alt='img'></img>
                  <div className="badge">часть 4</div>
                  <div className="benefit-title">Профессиональные тренеры</div>
                  <div className="benefit-text">-Мы работаем только с высокотренированными и сертифицированными<br/> тренерами, одобренными экспертами и<br/> у нас регулярно выступают привлеченные эксперты <br/>в клубе (нутрициолог, косметолог, психолог,<br/> энергетический практик, и т.д.</div>
               </div>
               <div className="benefit">
                  <img src={File} alt='img'></img>
                  <div className="badge">часть 5</div>
                  <div className="benefit-title">Архив предыдущих занятий</div>
                  <div className="benefit-text">Ты получишь доступ к предыдущим занятиям<br/> столько сколько ты<br/> остаешься в клубе.</div>
               </div>
               <div className="benefit">
                  <img src={Community} alt='img'></img>
                  <div className="badge">часть 6</div>
                  <div className="benefit-title">Сообщество</div>
                  <div className="benefit-text">-В личном кабинете есть также <br/> форум где вы можете общаться с единомышленниками <br/> на разные темы, мотивировать друг<br/> друга, задавать вопросы, организовывать оффлайн встречи,<br/> назначать видео звонки на разные темы, делиться<br/> результатами и инсайтами, сеть,...</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Achievements