
import { Grid } from '@mui/material';
import { Start } from 'assets';
import { ImageList } from 'components';
import { PeImages } from 'components/imagPastExp';
import { useMedia } from 'hooks/useMedia';
import './styles.css'

export const PastExperiences = () => {

  const { mobile, medium, large } = useMedia()

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
              <PeImages />
            </div>
          </div>
        </Grid>


      </Grid>

    </div>
  )
    ;
};


