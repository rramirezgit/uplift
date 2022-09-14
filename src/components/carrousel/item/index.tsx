import colors from 'styles/colors';
import './styles.css';
import { useMedia } from 'hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ItemCarrouselProps {
  title?: string;
  id?: number;
  text?: string;
  Image?: string;
  color:
  | 'purple'
  | 'red'
  | 'light_blue'
  | 'yellow'
  | 'orange'
  | 'core_blue'
  | 'dark_blue';
  onMouseHover?: any;
  onMouseLeave?: any;
}

export const ItemCarrousel = ({
  id,
  title,
  text,
  Image,
  color,
  onMouseHover,
  onMouseLeave,
}: ItemCarrouselProps) => {
  const { mobile } = useMedia();

  return (
    <>
      {!mobile ? (
        <>
          <div
            className="item-carrousel"
            tabIndex={0}
            id={`itemCarrousel${id}`}
            style={{ backgroundColor: colors[color] }}>
            <div className="item-buffer"></div>
            <div className="item-title" id={`item-title${id}`}>
              {title}
            </div>
            <div className="item-img" id={`item-img${id}`}>
              <LazyLoadImage
                effect="blur"
                src={Image} />
            </div>
            <div className="data-hover">
              <div className="item-title-hover" id={`itemCarrousel${id}`}>
                {title}
              </div>
              <div className="item-text" id={`itemCarrousel${id}`}>
                {text}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className="item-carrousel-mobile"
          style={{ backgroundColor: colors[color] }}>
          <div className="item-title-mobile">{title}</div>
          <div className="item-img-mobile">
            <img loading='lazy' src={Image} alt="" />
          </div>
          <div className="item-text-mobile">{text}</div>
        </div>
      )}
    </>
  );
};
