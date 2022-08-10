
import { Start, Moneda } from 'assets';
import { CardTokenize } from 'components';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/all';
// import { useState } from 'react';
import './styles.css'
gsap.registerPlugin(MotionPathPlugin);

export const TokenizenConquer = () => {
  //  const [state, setstate] = useState(false);
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

  const onClick = () => {
    // gsap.to(".prueba #prueba", {transform: "translate(-7px, 23px)", duration: 1})
    // gsap.to(".prueba #prueba", {
    //   duration: 1, 
    //   ease: "power1.inOut",
    //   reversed: state,
    //   motionPath:{
    //     path: [{x:0, y:0}, {x:-10, y:10}, {x:-50, y:50}, {x:-80, y:100}, ],
    //   }
    // });
    // setstate(true)
  }


  return (
    <div className="tokenizenConquer">
      <Start className='start-tk' />
      <Start className='start-two-tk' />
      <Start className='start-three-tk' />
      <div className='title-tkConquer'>
        Tokenize and conquer
      </div>
      <div className='text-tkConquer'>
        Tokenize your projects and let your fans be a part of them. Achieve financial independence as your fans gain benefits.
      </div>
      {/* moneda */}
      <div className='content-moneda'>
        <Moneda className='moneda-tk' onMouseOver={onClick} />
      </div>

      {
        dataCards.map((data, index) => {
          return <CardTokenize key={index} data={data} className={`card-tokenize-${index}`} />
        })
      }


    </div>
  );
};


