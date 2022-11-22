import './sass/innovation.scss'

const Innovation = ({ title, Svg }) => {
   return (
      <div className='innovation'>
         <Svg />

         <h4 className='heading-4'>{title}</h4>
         <button className='innovation__btn'>Show me</button>
      </div>
   )
}

export default Innovation