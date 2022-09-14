
import { Grid } from '@mui/material';
import { ReactComponent as Start } from 'assets/star.svg';
import { LazyLoad } from 'components/lazy';
import { useMedia } from 'hooks/useMedia';
import { lazy } from 'react';
import './styles.css'

const ImageList = lazy(() => import('../../../components/imageList'))
const PeImages = lazy(() => import('../../../components/imagPastExp'))
const PastExperiences = () => {

  const { medium, large } = useMedia()

  return (
    <div className="pastExperiences">
      <Grid container spacing={0}>
        <Grid item lg={6} md={12} sm={12}>
            <div className="past-experiences__images">
              <ImageList opacity={(medium || large) ? 0.1 : 1} />
            </div>
        </Grid>

        <Grid item lg={6} md={12} sm={12}>
          <Start className='start-pe-one' />
          <Start className='start-pe-two' />
          <Start className='start-pe-three' />
          <div className="past-experiences__content">
            <div className="past-experiences__title">Past Experiences</div>
            <div className="past-experiences__text">
              These artists are already promoting their projects using Uplift
            </div>
            <div className="images-mobile">
              <LazyLoad tag='div'>
                <PeImages />
              </LazyLoad>
            </div>
          </div>
        </Grid>


      </Grid>

    </div>
  )
    ;
};

export default PastExperiences


