import './styles.css';
import { Cross, Fee, Heart, Rank, Sales, Screen } from './iconsCards';
import { LazyLoad } from 'components/lazy';

const WhyUplify = () => {
  return (
    <section className="uf--padding-section uf--why-uplify">
      <div className="uf--content">
        <h2 className="uf--title">Why Uplift?</h2>
        <p className="uf--font-base">
          We have all the tools and technologies you need to scale your business
        </p>
          <section className="uf--cards">

            <div className="uf--card">
              <div className="icon"><Screen /></div>
              <h4>All in one platform</h4>
              <p>User your own entertainment services or connect to the best services the market has to offer all in one platform</p>
            </div>
            <div className="uf--card">
              <div className="icon"><Rank /></div>
              <h4>Top Tech for every Artist</h4>
              <p>No need to have a huge budget and years of development and testing to use the best technology available to sell and promote your business</p>
            </div>
            <div className="uf--card">
              <div className="icon"><Sales /></div>
              <h4>Borderless sales</h4>
              <p>Sell all your products and services globally without to deal with the hassle of currency conversions. Let your fans pay their way with their local methods and get your money in yours</p>
            </div>
            <div className="uf--card">
              <div className="icon"><Cross /></div>
              <h4>Cross sell / Up sell</h4>
              <p>Sell your products / services separate, together, in a bundle, your choice. </p>
            </div>
            <div className="uf--card">
              <div className="icon"><Heart /></div>
              <h4>Simple implementation</h4>
              <p>Just upload your logo, colors and content and start selling. You could be selling across all services within minutes.</p>
            </div>
            <div className="uf--card">
              <div className="icon"><Fee /></div>
              <h4>All for a small fee</h4>
              <p>Configure your platform, your way. Pay as you sell and ONLY if you sell. No hidden fees.    </p>
            </div>

          </section>
      </div>
    </section>
  );
};

export default WhyUplify
