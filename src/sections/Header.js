import { IconPlay } from './assets/icons'
import './sass/header.scss'

import headerImage from './assets/images/header-image.png'
import { Nav, Stats } from '../components'

const Header = () => {
   return (
      <div className='header'>
         <Nav />

         <div className='header__content'>
            <h1 className='heading-1'>Take Your Learning<br />To The Next Level.</h1>
            <p className='header__desc'>
               Gain critical student insights when assessing while freeing teachers from the pains
               of grading. Simply add Eduo to your learning platform.
            </p>

            <div className='header__cta'>
               <button className='btn__demo'>Request Demo</button>

               <button className='btn__play'>
                  <span className='btn__play--icon'>
                     <IconPlay />
                  </span>
                  <span className='btn__play--text'>
                     What's Eduo?
                  </span>
               </button>
            </div>
         </div>

         <figure className='header__image--container'>
            <img className='header__image'
               src={headerImage} alt='header__image' />
         </figure>

         <Stats />
      </div>
   )
}

export default Header