import React from "react";
import Community from '../community.png'
import Coaching from '../coaching.png'
import File from '../file.png'
import Key from '../key.png'
import OnlineClass from '../onlineclass.png'
import Lotus from '../lotus.png'

import '../styles.scss'

function Achievements(){
   return(
      <div className='achievemens-block'>
         <div className='achievements'>
            <div className='achievements-title'>What will you get in the club?</div>
            <div className='achievements-container'>
               <div className="benefit">
                  <img src={Lotus} alt='img'></img>
                  <div className="badge">part 1</div>
                  <div className="benefit-title">A complete program</div>
                  <div className="benefit-text">The New You club has everything you need.<br/> Face, body, posture, yoga, workouts, meditation,<br/> personal development, self confidence<br/> boosting,...</div>
               </div>
               <div className="benefit">
                  <img src={OnlineClass} alt='img'></img>
                  <div className="badge">part 2</div>
                  <div className="benefit-title">Daily classes (recorded)</div>
                  <div className="benefit-text">We have new classes every day of the week<br/> which you can follow live or watch at a later<br/> moment.</div>
               </div>
               <div className="benefit">
                  <img src={Key} alt='img'></img>
                  <div className="badge">part 3</div>
                  <div className="benefit-title">Access to several (mini)-courses</div>
                  <div className="benefit-text">-You will get access to several courses (see<br/> below) with new courses being added every<br/> month.</div>
               </div>
               <div className="benefit">
                  <img src={Coaching} alt='img'></img>
                  <div className="badge">part 4</div>
                  <div className="benefit-title">Professional trainers</div>
                  <div className="benefit-text">-We only work with highly trained and certified<br/> coaches, approved by experts in the field and<br/> regularly have external expert speakers in the<br/> club (nutritionist, cosmetologist, psychologist,<br/> energy practitioner, etc.</div>
               </div>
               <div className="benefit">
                  <img src={File} alt='img'></img>
                  <div className="badge">part 5</div>
                  <div className="benefit-title">Archive of previous classes</div>
                  <div className="benefit-text">You will get access to all previous classes and<br/> courses for as long as<br/> you stay a member.</div>
               </div>
               <div className="benefit">
                  <img src={Community} alt='img'></img>
                  <div className="badge">part 6</div>
                  <div className="benefit-title">Community</div>
                  <div className="benefit-text">-In the members area of the club there is also a<br/> forum where you can chat with like-minded club<br/> members on different topics, motivate each<br/> other, ask questions, arrange offline meetings,<br/> schedule video calls on different topics, share<br/> results and insights, network,...</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Achievements