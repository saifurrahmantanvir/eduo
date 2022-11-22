import './sass/composition.scss'

import image1 from './assets/images/image-1.png'
import image2 from './assets/images/image-2.png'
import image3 from './assets/images/image-3.png'
import image4 from './assets/images/image-4.png'
import image5 from './assets/images/image-5.png'
import image6 from './assets/images/image-6.png'

const CompositionItem = ({ imgSrc, classname }) => {
   return (
      <figure className={classname}>
         <img src={imgSrc} alt={classname} />
      </figure>
   )
}

const Composition = () => {
   return (
      <div className='composition'>
         <CompositionItem imgSrc={image1}
            classname='composition-1' />

         <CompositionItem imgSrc={image2}
            classname='composition-2' />

         <CompositionItem imgSrc={image3}
            classname='composition-3' />

         <CompositionItem imgSrc={image4}
            classname='composition-4' />

         <CompositionItem imgSrc={image5}
            classname='composition-5' />

         <CompositionItem imgSrc={image6}
            classname='composition-6' />
      </div>
   )
}

export default Composition