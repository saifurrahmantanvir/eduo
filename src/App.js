import './app.scss'

import {
  Header,
  Features,
  Courses,
  Instructor,
  Innovations,
  Testimonials,
  Footer
} from './sections';

const App = function () {
  return (
    <div className='app'>
      <Header />
      <Features />
      <Courses />
      <Instructor />
      <Innovations />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;