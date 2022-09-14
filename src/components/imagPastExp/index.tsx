import { ReactComponent as Artista } from 'assets/pstExpiMobile/1.svg';
import { ReactComponent as Artista2 } from 'assets/pstExpiMobile/1.svg';
import { ReactComponent as Morat } from 'assets/pstExpiMobile/morat.svg';
import { ReactComponent as CulturaP } from 'assets/pstExpiMobile/culturaProfetica.svg';
import './styles.css';

export const PeImages = () => {

  return (
    <div className="pe-images__content">
      <div>
        <Artista />
      </div>
      <div className="doble">
        <CulturaP />
        <Morat />
      </div>
      <div>
        <Artista2 />
      </div>
      <div className="doble">
        <CulturaP />
        <Morat />
      </div>
    </div>
  );
};

export default PeImages
