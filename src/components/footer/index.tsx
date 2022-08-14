import { Grid } from '@mui/material';
import './styles.css'
import { FigmaIcon, GithubIcon, GitlabIcon, InstagramIcon, Logo, SocialIcon, TelegramIcon } from 'assets';
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
              <SocialIcon />
              <GitlabIcon />
              <GithubIcon />
              <TelegramIcon />
              <InstagramIcon />
              <FigmaIcon />
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
