import { Grid, IconButton } from '@mui/material';
import SocialIcon from 'assets/icons/social.png';
import FigmaIcon from 'assets/icons/figma.png';
import GitLab from 'assets/icons/gitlab.png';
import Telegram from 'assets/icons/telegram.png';
import Instagram from 'assets/icons/instagram.png';
import './styles.css'
import { Logo } from 'assets';
import { Button } from 'components/buttons';

export const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-content'>
        <Grid container>
          <Grid item xs={3} >
            <Logo className={"logo-footer"} />
          </Grid>
          <Grid item xs={6} >
            <div className="footer-social">
              <IconButton >
                <img src={SocialIcon} alt="" />
              </IconButton>
              <IconButton>
                <img src={GitLab} alt="" />
              </IconButton>
              <IconButton>
                <img src={Telegram} alt="" />
              </IconButton>
              <IconButton>
                <img src={Instagram} alt="" />
              </IconButton>
              <IconButton>
                <img src={FigmaIcon} alt="" />
              </IconButton>
            </div>
            <div className="links-footer">
              <span className="link-f">
                About
              </span>
              <span className="link-f">
                Features
              </span >
              <span className="link-f">
                Pircing
              </span>
              <span className="link-f">
                Gallery
              </span>
              <span className="link-f">
                Team
              </span>
            </div>
          </Grid>
          <Grid item xs={3} >
            <Button variant="contained" color="purple" width={184.36} height={53.18} text={"Request invite"} />
          </Grid>
        </Grid>
        <hr className="hr-footer" />
        <div className="data-footer">
          © 2021 All Rights Reserved
        </div>

      </div>
    </div>
  );
};
