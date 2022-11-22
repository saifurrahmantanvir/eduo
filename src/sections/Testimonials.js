import './sass/testimonials.scss'

import userDefault from './assets/images/user-default.png'

import { Users } from '../components'

const Testimonials = () => {
   return (
      <div className='testimonials'>
         <h2 className='heading-2'>Student Testimonial</h2>
         <p className='description'>
            Discover some of the many benefits you will enjoy when you<br /> add us to your online learning platform.
         </p>

         <div className='testimonials__container'>
            <Users />

            <blockquote className='testimonial'>
               <span className='testimonial__text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet.
               </span>

               <cite className='testimonial__author'>
                  <figure className='testimonial__author--img'>
                     <img src={userDefault} alt='user-default' />
                  </figure>
                  <h4 className='heading-4'>Jenifar Doe</h4>
                  <p className='testimonial__author--type'>Student</p>
               </cite>
            </blockquote>

            <Users />
         </div>
      </div>
   )
}

export default Testimonials