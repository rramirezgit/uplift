import { Grid } from '@mui/material';
import './styles.css'
import { FigmaIcon, GithubIcon, GitlabIcon, InstagramIcon, Logo, SocialIcon, TelegramIcon } from 'assets';
import { Button } from 'components/buttons';
import { useMedia } from 'hooks';

export const Footer = () => {
  const { large } = useMedia()
  return (
    <div className="footer">
      <div className='footer-content'>
        {!large ?
          <>
            <Grid container>
              <Grid item lg={3} >
                <Logo className={"logo-footer"} />
              </Grid>
              <Grid item lg={6} >
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
              <Grid item lg={3} >
                <Button variant="contained" color="purple" width={184.36} height={53.18} text={"Request invite"} />
              </Grid>
            </Grid>
            <hr className="hr-footer" />
            <div className="data-footer">
              © 2021 All Rights Reserved
            </div>
          </>

          :
          <>
            <div className='content-foo-mob'>
              <Logo className={"logo-footer"} />
              <Button variant="contained" color="red" width={149.37} height={43.18} text={"Request invite"} />
            </div>
            <div>
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
              <div className="footer-social">
                <SocialIcon className='icon-foo' />
                <GitlabIcon className='icon-foo'/>
                <GithubIcon className='icon-foo'/>
                <TelegramIcon className='icon-foo'/>
                <InstagramIcon className='icon-foo'/>
                <FigmaIcon className='icon-foo'/>
              </div>
            </div>
            <div className="data-footer">
              © 2021 All Rights Reserved
            </div>
          </>
        }

      </div>
    </div >
  );
};
