import './sass/course.scss'

import { IconPlay, IconStar, IconVideo } from './assets/icons'

const Course = ({ imgSrc, rating }) => {
   return (
      <div className='course'>
         <figure>
            <img className='course__img' src={imgSrc} alt='course-1' />
         </figure>

         <div className='course__detail'>
            <span className='course__tag'>English Development</span>
            <div className='course__rating'>
               <IconStar />
               <span>{rating}</span>
            </div>

            <h4 className='course__title'>
               Master English: How to Improve Your English speaking
            </h4>

            <div className='course__lesson'>
               <IconPlay />
               <span>10x Lesson</span>
            </div>
            <div className='course__video'>
               <IconVideo />
               <span>Online Class</span>
            </div>
         </div>
      </div>
   )
}

export default Course