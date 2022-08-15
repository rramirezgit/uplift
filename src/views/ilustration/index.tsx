
import { Ilustrationimg } from 'assets';

import { useMedia } from 'hooks';
import './styles.css'

export const Ilustration = () => {
  const { large } = useMedia()
  return <div className='ilustration'>
    <div className='ilustration-title'>
      Make the most out of your music business
    </div>

    {
      !large && <Ilustrationimg className="ilustration-img" />
    }

  </div>
};


