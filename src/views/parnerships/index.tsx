import './styles.css';
import gridSponsors from '../../assets/images/sponsor.png';
import { Button } from '@mui/material';

export const Parnerships = () => {
  return (
    <section className="uf--padding-section uf--sponsors">
      <div className="uf--content">
        <div className="uf--info">
          <h2 className="uf--title">
            Partnerships & <br />
            Sponsors
          </h2>
          <p className="uf--font-base">
            Gain access to the Uplift network and take your business to the next
            level
          </p>
          <div className="uf--btns-sponsors">
            <Button variant="outlined" className="uf--tag-sponsors">
              Ticketing
            </Button>
            <Button variant="outlined" className="uf--tag-sponsors">
              Streaming
            </Button>
            <Button variant="outlined" className="uf--tag-sponsors">
              Snacks and Drinks
            </Button>
            <Button variant="outlined" className="uf--tag-sponsors">
              Crowdfunding
            </Button>
            <Button variant="outlined" className="uf--tag-sponsors">
              Metaverse
            </Button>
            <Button variant="outlined" className="uf--tag-sponsors">
              Merch
            </Button>
            <Button variant="outlined" className="uf--tag-sponsors">
              Suscriptions
            </Button>
            <Button variant="outlined" className="uf--tag-sponsors">
              Sponsors
            </Button>
            <Button variant="outlined" className="uf--tag-sponsors">
              NFT
            </Button>
            <div className="uf--wrap-join">
              <Button variant="contained">
                Join the network
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="uf--sponsors-brands">
        <img src={gridSponsors} alt="" className="uf--grid-sponsors" />
      </div>
    </section>
  );
};
