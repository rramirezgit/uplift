import './styles.css';
import { Grid } from '@mui/material';
import VerctorFuture from 'assets/vectorFuture.png';
import { useMedia } from 'hooks';

export const FutureEntretainment = () => {
  const { medium, large } = useMedia()

  return (
    <section className="uf--padding-section uf--future-entertainment">
      <div className="uf--content">
        <Grid container spacing={10}>
          <Grid item lg={6} md={12} sm={12}>
            <div className="uf--info">
              <h2 className="uf--title">The future of entertainment</h2>
              <p className="uf--font-base">
                The world is evolving fast, and new technologies like Web3
                tokenization and the Metaverse are paving the path to the future of
                entertainment and its business models.
              </p>
              <p className="uf--font-base">
                With the use of these technologies, artists could enable
                transformative change in incentives, ownership structures, and
                monetization channels that will create an empowering ecosystem for
                them to succeed.
              </p>
            </div>
          </Grid>
          <Grid item lg={6} md={12} sm={12}>
            <div className="uf--content__img">
              <img src={VerctorFuture} alt=""
                className="verctor-future" />

            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
