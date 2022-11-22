import './sass/footer.scss'

const FooterList = ({ items }) => {
   return (
      <ul className='footer__list'>
         {
            items.map((item) => (
               <li key={item} className='footer__list--item'>{item}</li>
            ))
         }
      </ul>
   )
}

const Footer = () => {
   return (
      <footer className='footer'>
         <div className='footer__subscription'>
            <h2 className='heading-2'>Get In Touch</h2>
            <p className='description'>
               Lorem ipsum dolor sit amet, consectetur adipiscing<br />elit, sed do  eiusmod tempor incididunt.
            </p>

            <form className='footer__form'>
               <input className='footer__input' type='email' placeholder='Enter your email adress' />
               <button className='footer__btn'>Subscribe</button>
            </form>
         </div>

         <div className='footer__links'>
            <div>
               <span className='nav__logo'>Eduo.</span>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit
               </p>
            </div>

            <FooterList items={[
               'Company',
               'About Us',
               'Services',
               'Community',
               'Testimonial'
            ]} />

            <FooterList items={[
               'Support',
               'Help Center',
               'Tweet @ Us',
               'Webians',
               'Feedback'
            ]} />

            <FooterList items={[
               'Links',
               'Courses',
               'Become teacher',
               'Service',
               'All in One'
            ]} />

            <FooterList items={[
               'Contact Us',
               '(880) 112 345 678',
               'support@mail.com'
            ]} />
         </div>

         <span className='footer__bar'></span>
         <span className='footer__copy'>
            Copyright © 2020 All rights Reserved - Saber, Tanvir.
         </span>
      </footer>
   )
}

export default Footer