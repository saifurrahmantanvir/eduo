import './sass/stats.scss'
import { IconGlobe, IconHome, IconUser } from './assets/icons'

const Stats = () => {
   return (
      <div className='stats'>
         <div className='stats__item stats__schools'>
            <div className='stats__icon'>
               <IconHome />
            </div>

            <div className='stats__count stats__schools--count'>
               <span>16,032</span>
               <span>Schools</span>
            </div>
         </div>

         <div className='stats__item stats__users'>
            <div className='stats__icon'>
               <IconUser />
            </div>

            <div className='stats__count stats__users--count'>
               <span>10M</span>
               <span>Users</span>
            </div>
         </div>

         <div className='stats__item stats__countries'>
            <div className='stats__icon'>
               <IconGlobe />
            </div>

            <div className='stats__count stats__countries--count'>
               <span>119</span>
               <span>Countries</span>
            </div>
         </div>
      </div>
   )
}

export default Stats