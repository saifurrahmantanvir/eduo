import './sass/courses.scss'

import course1 from './assets/images/course-1.png'
import course2 from './assets/images/course-2.png'
import course3 from './assets/images/course-3.png'

import { Course } from '../components'

const Courses = () => {
   return (
      <div className='courses'>
         <h2 className='heading-2'>Our Popular Courses</h2>
         <p className='description'>
            Discover some of the many benefits you will enjoy when you<br />add us to your online learning platform.
         </p>

         <div className='courses__container'>
            <Course imgSrc={course1} rating={4.8} />
            <Course imgSrc={course2} rating={4.5} />
            <Course imgSrc={course3} rating={5.0} />
         </div>
      </div>
   )
}

export default Courses