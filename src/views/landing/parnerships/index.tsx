import './styles.css';
import gridSponsors from 'assets/images/sponsor.png';
import { Button } from 'components';

export const Parnerships = () => {
  return (
    <section className="uf--padding-section uf--sponsors">
      <div className="uf--content">
        <div className="uf--info">
          <h2 className="uf--title">
            Partnerships & <br className="br-title" />
            Sponsors
          </h2>
          <p className="uf--font-basep">
            Gain access to the Uplift network and take your business to the next
            level
          </p>
          <div className="uf--btns-sponsors">
            <Button className="uf--tag-sponsors" variant='outlined' text='Ticketing' color='none' />
            <Button className="uf--tag-sponsors" variant='outlined' text='Streaming' color='none' />
            <Button className="uf--tag-sponsors" variant='outlined' text='Snacks and Drinks' color='none' />
            <Button className="uf--tag-sponsors" variant='outlined' text='Crowdfunding' color='none' />
            <Button className="uf--tag-sponsors" variant='outlined' text='Metaverse' color='none' />
            <Button className="uf--tag-sponsors" variant='outlined' text='Merch' color='none' />
            <Button className="uf--tag-sponsors" variant='outlined' text='Suscriptions' color='none' />
            <Button className="uf--tag-sponsors" variant='outlined' text='Sponsors' color='none' />           
            <Button className="uf--tag-sponsors" variant='outlined' text='NFT' color='none' />
            <div className="uf--wrap-join">
              <Button variant="contained" text='Join the network'/>
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
