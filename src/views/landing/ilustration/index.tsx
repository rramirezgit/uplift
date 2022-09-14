


import { LazyLoadImage } from 'react-lazy-load-image-component'
import './styles.css'

const Ilustration = () => {
  return <div className='ilustration'>
    <div className='ilustration-title'>
      Make the most out of your music business
    </div>

    <LazyLoadImage
      id="imgIlustration"
      className='ilustration-img'
      effect="blur"
      src={`${process.env.REACT_APP_URL_IMAGES}upliftIlustration.png`} />
  </div>
};

export default Ilustration

