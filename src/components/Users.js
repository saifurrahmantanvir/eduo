import './sass/users.scss'

import user1 from './assets/images/user-1.png'
import user2 from './assets/images/user-2.png'
import user3 from './assets/images/user-3.png'

const Users = () => {
   return (
      <div className='users'>
         <figure className='users__user users__user-1'>
            <img src={user1} alt='user-1' />
         </figure>

         <figure className='users__user users__user-2'>
            <img src={user2} alt='user-2' />
         </figure>

         <figure className='users__user users__user-3'>
            <img src={user3} alt='user-3' />
         </figure>
      </div>
   )
}

export default Users