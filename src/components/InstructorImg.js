import './sass/instructorImg.scss'

import instructor from './assets/images/instructor.png'

const InstructorImg = () => {
   return (
      <figure className='instructor-img'>
         <img src={instructor} alt='instructor__img' />

      </figure>
   )
}

export default InstructorImg