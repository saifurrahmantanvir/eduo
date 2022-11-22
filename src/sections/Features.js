import React from 'react'
import './sass/features.scss'

import { IconCourse, IconDegree, IconExpert } from './assets/icons'
import { Composition, Feature } from '../components'

const Features = () => {
   return (
      <React.Fragment>
         <Composition />

         <div className='features'>
            <h2 className='heading-2'>Features of our online learning</h2>

            <Feature heading='Online degrees'
               Icon={IconDegree} iconNo={1} />

            <Feature heading='Short courses'
               Icon={IconCourse} iconNo={2} />

            <Feature heading='Learn with experts'
               Icon={IconExpert} iconNo={3} />
         </div>
      </React.Fragment>
   )
}

export default Features