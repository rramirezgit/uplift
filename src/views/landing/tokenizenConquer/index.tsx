
import { ReactComponent as Start } from 'assets/star.svg';
import Button from 'components/buttons';
import CardTokenize from 'components/cardTokenize';
import { LazyLoad } from 'components/lazy';
import { MonedaGsad } from 'components/moneda';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/all';
import { useMedia } from 'hooks';

import './styles.css'
gsap.registerPlugin(MotionPathPlugin);

const TokenizenConquer = () => {
  //  const [state, setstate] = useState(false);
  const { large } = useMedia()
  const dataCards = [
    {
      title1: 'Exclusive Experiences',
      description1: 'Offer specific experiences to your most loyal fans. Perhaps a live stream or a dinner date',
      title2: 'Conquer',
      description2: 'Conquer the world with your crypto assets.',
    },
    {
      title1: 'Decision making',
      description1: 'Be more inclusive. Involve them in decisions like merch design and tour cities and dates',
      title2: 'Conquer',
      description2: 'Conquer the world with your crypto assets.',
    },
    {
      title1: 'Premium Rewards',
      description1: 'Reward them with free tickets or merch discount and remind them how special they are',
      title2: 'Conquer',
      description2: 'Conquer the world with your crypto assets.',
    },
    {
      title1: 'Shared success',
      description1: 'Let your fans be a part of your success. They hold tokens that will grow in value in the future',
      title2: 'Special Benefits',
      description2: 'Conquer the world with your crypto assets.',
    },
    {
      title1: 'Special Benefits',
      description1: 'Gratify fans with benefits like concerts early access or a meet & greet',
      title2: 'Special Benefits',
      description2: 'Conquer the world with your crypto assets.',
    },
  ]


  return (
    <div className="tokenizenConquer">
      <Start className='start-tk' />
      <Start className='start-three-tk' />
      <div className='title-tkConquer'>
        Tokenize and conquer
      </div>
      <div className='text-tkConquer'>
        Tokenize your projects and let your fans be a part of them. Achieve financial independence as your fans gain benefits.
      </div>

      <div className='content-moneda' >
        <MonedaGsad />
      </div>      

      {large &&
        <>
          <div className='content-carTk'>
            {
              dataCards.map((data, index) => (
                <CardTokenize key={index} data={data} />
              ))
            }
          </div>
        </>

      }
      <Button variant='contained' width={152.88} height={45} color='orange' text='and much more' className={"button-tk"} />

    </div>
  );
};

export default TokenizenConquer

