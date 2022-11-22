import React from 'react'
import './sass/instructor.scss'

import { InstructorImg } from '../components'

const Instructor = () => {
   return (
      <React.Fragment>
         <div className='instructor'>
            <h2 className='heading-2'>Become an instructor</h2>

            <p className='instructor__desc'>
               Despite going online, it remains excessively manual, wastes countless teacher hours and hasn’t improved student writing skills since 1998.<br />Despite going online, it remains excessively manual, wastes countless teacher hours and hasn’t improved student.
            </p>

            <button className='btn__apply'>Click Here to Apply</button>
         </div>

         <InstructorImg />
      </React.Fragment>
   )
}

export default Instructor