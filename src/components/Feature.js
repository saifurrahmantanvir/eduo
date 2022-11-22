import './sass/feature.scss'

const Feature = ({ heading, Icon, iconNo }) => {
   return (
      <div className='feature'>
         <figure className={`feature__icon feature__icon-${iconNo}`}>
            <Icon />
         </figure>
         <h3 className='heading-3'>{heading}</h3>
         <p className='feature__desc'>
            On the other hand, we denounce with righteous indignation and dislike men who are so
         </p>
      </div>
   )
}

export default Feature