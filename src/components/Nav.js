import './sass/nav.scss'

const Nav = () => {
   return (
      <nav className='nav'>
         <span className='nav__logo'>Eduo.</span>

         <ul className='nav__list'>
            <li className='nav__item'>Courses</li>
            <li className='nav__item'>Innovations</li>
            <li className='nav__item'>Platforms</li>
            <li className='nav__item'>Resources</li>
            <li className='nav__item'>About</li>
         </ul>

         <button className='btn__demo btn__demo--nav'>
            Request Demo
         </button>
      </nav>
   )
}

export default Nav