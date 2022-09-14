import './styles.css';
import gridSponsors from 'assets/images/sponsor.png';
import { Button } from 'components/buttons';
import { useState } from 'react';
import { LazyLoad } from 'components/lazy';

const Parnerships = () => {
  const [tagSelected, setTagSelected] = useState<string | null>(null);
  const handleTag = (tag: string) => {
    setTagSelected(tag === tagSelected ? null : tag);
  };
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
            <Button
              className={
                tagSelected === 'ticket'
                  ? 'uf--tag-sponsors active'
                  : 'uf--tag-sponsors'
              }
              variant={'outlined'}
              text="Ticketing"
              color="none"
              onClick={() => handleTag('ticket')}
            />
            <Button
              className={
                tagSelected === 'streaming'
                  ? 'uf--tag-sponsors active'
                  : 'uf--tag-sponsors'
              }
              variant={'outlined'}
              text="Streaming"
              color="none"
              onClick={() => handleTag('streaming')}
            />
            <Button
              className={
                tagSelected === 'snacks'
                  ? 'uf--tag-sponsors active'
                  : 'uf--tag-sponsors'
              }
              variant={'outlined'}
              text="Snacks and Drinks"
              color="none"
              onClick={() => handleTag('snacks')}
            />
            <Button
              className={
                tagSelected === 'crowdfunding'
                  ? 'uf--tag-sponsors active'
                  : 'uf--tag-sponsors'
              }
              variant={'outlined'}
              text="Crowdfunding"
              color="none"
              onClick={() => handleTag('crowdfunding')}
            />
            <Button
              className={
                tagSelected === 'metaverse'
                  ? 'uf--tag-sponsors active'
                  : 'uf--tag-sponsors'
              }
              variant={'outlined'}
              text="Metaverse"
              color="none"
              onClick={() => handleTag('metaverse')}
            />
            <Button
              className={
                tagSelected === 'merch'
                  ? 'uf--tag-sponsors active'
                  : 'uf--tag-sponsors'
              }
              variant={'outlined'}
              text="Merch"
              color="none"
              onClick={() => handleTag('merch')}
            />
            <Button
              className={
                tagSelected === 'subscription'
                  ? 'uf--tag-sponsors active'
                  : 'uf--tag-sponsors'
              }
              variant={'outlined'}
              text="Suscriptions"
              color="none"
              onClick={() => handleTag('subscription')}
            />
            <Button
              className={
                tagSelected === 'sponsor'
                  ? 'uf--tag-sponsors active'
                  : 'uf--tag-sponsors'
              }
              variant={'outlined'}
              text="Sponsors"
              color="none"
              onClick={() => handleTag('sponsor')}
            />
            <Button
              className={
                tagSelected === 'nft'
                  ? 'uf--tag-sponsors active'
                  : 'uf--tag-sponsors'
              }
              variant={'outlined'}
              text="NFT"
              color="none"
              onClick={() => handleTag('nft')}
            />
            <div className="uf--wrap-join">
              <Button variant="contained" text="Join the network" />
            </div>
          </div>
        </div>
        <LazyLoad tag='div'>
          {tagSelected && (
            <div className="uf--grid-sponsors-list">
              <div className="uf--grid-sponsors-list-content">
                {Sponsors.map((s) => {
                  return s.tags.includes(tagSelected) ? (
                    <figure>
                      <img loading='lazy' src={s.imgUrl} alt="" />
                    </figure>
                  ) : (
                    <></>
                  );
                })}
              </div>
            </div>
          )}
        </LazyLoad>
      </div>
      <div className={`uf--sponsors-brands ${tagSelected ? 'uf-no-cat' : ''}`}>
        {!tagSelected && (
          <img loading='lazy' src={gridSponsors} alt="" className="uf--grid-sponsors" />
        )}
      </div>
    </section>
  );
};

const Sponsors = [
  {
    tags: ['snacks'],
    imgUrl: `${process.env.REACT_APP_URL_IMAGES}sponsors/fritolay.png`,
  },
  {
    tags: ['snacks'],
    imgUrl: `${process.env.REACT_APP_URL_IMAGES}sponsors/redbull.png`,
  },
  {
    tags: ['snacks', 'merch'],
    imgUrl: `${process.env.REACT_APP_URL_IMAGES}sponsors/brand.png`,
  },
  {
    tags: ['snacks'],
    imgUrl: `${process.env.REACT_APP_URL_IMAGES}sponsors/pepsi.png`,
  },
];

export default Parnerships
