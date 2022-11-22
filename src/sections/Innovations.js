import './sass/innovations.scss'
import { Innovation } from '../components'
import {
   InteligenceSvg,
   StudentSvg,
   FocusSvg
} from './assets/svgs'

const Innovations = () => {
   return (
      <div className='innovations'>
         <h2 className='heading-2'>Our Innovations</h2>
         <p className='description'>
            Discover some of the many benefits you will enjoy when you<br /> add us to your online learning platform.
         </p>

         <div className='innovations__container'>
            <Innovation title='Hours Freed'
               Svg={StudentSvg} />
            <Innovation title='Real-Time Intelligence'
               Svg={InteligenceSvg} />
            <Innovation title='Student Centered'
               Svg={StudentSvg} />
            <Innovation title='Mastery Focused'
               Svg={FocusSvg} />
            <Innovation title='Any Flatform'
               Svg={InteligenceSvg} />
            <Innovation title='Mastery Focused'
               Svg={FocusSvg} />
         </div>
      </div>
   )
}

export default Innovations