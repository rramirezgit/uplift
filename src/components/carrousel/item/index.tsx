import colors from 'styles/colors';
import './styles.css'
import { useEffect, useState } from 'react';
import { useMedia } from 'hooks';

interface ItemCarrouselProps {
    title?: string;
    id?: number;
    text?: string;
    Image?: React.ReactElement;
    color: "purple" | "red" | "light_blue" | "yellow" | "orange" | "core_blue" | "dark_blue";
    onMouseHover?: any
    onMouseLeave?: any
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
    const [isHover, setIsHover] = useState(false);
    const [isRotate, setIsRotate] = useState(false);
    const [timeOut, setTimeOut] = useState<any>(null);

    const { mobile, medium } = useMedia()


    const disablesEvents = (e: any) => {
        if (isRotate) {
            setTimeout(() => {
                const itemCarousel = document.querySelector(`#itemCarrousel${id}`) as HTMLElement
                const title = document.querySelector(`#item-title${id}`) as HTMLElement
                const image = document.querySelector(`#item-img${id}`) as HTMLElement
                title.style.display = "block"
                image.style.display = "flex"
                itemCarousel.className = "item-carrousel";
                itemCarousel.parentElement?.classList.remove("alice-item-carrousel-hover");
                setIsRotate(false)
            }, 1)
        } else {
            setIsRotate(false)
            clearTimeout(timeOut);
        }
    }

    const enableEvents = (e: any) => {
        let time = setTimeout(() => {
            setIsRotate(true)
            e.stopPropagation()
            const itemCarousel = document.querySelector(`#itemCarrousel${id}`) as HTMLElement
            const title = document.querySelector(`#item-title${id}`) as HTMLElement
            const image = document.querySelector(`#item-img${id}`) as HTMLElement
            title.style.display = "none"
            image.style.display = "none"
            itemCarousel.classList.add("item-carrousel__hover")
            itemCarousel.parentElement?.classList.add("alice-item-carrousel-hover");

        }, 500)
        setTimeOut(time)

    }

    const delayClass = () => {
        setTimeout(() => {
            const data = document.querySelector('.data-hover') as HTMLElement
            data.style.display = "block"
        }, 200);


        return (
            <>
                <div style={{ display: "none" }} className="data-hover">
                    <div className="item-title-hover" id={`itemCarrousel${id}`}>{title}</div>
                    <div className="item-text" id={`itemCarrousel${id}`}>
                        {text}
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            {!mobile ?
                <>
                    <div className="item-carrousel"
                        tabIndex={0}
                        id={`itemCarrousel${id}`}
                        style={{ backgroundColor: colors[color] }}
                        onMouseEnter={(e) => {
                            enableEvents(e)
                            setIsHover(true)
                            onMouseHover(e)
                        }}
                        onMouseLeave={(e) => {
                            disablesEvents(e)
                            setIsHover(false)
                            onMouseLeave(e)
                        }
                        }
                    >
                        <div className="item-title" id={`item-title${id}`}>{title}</div>
                        <div className="item-img" id={`item-img${id}`}>
                            {Image}
                        </div>
                        {isRotate &&
                            delayClass()
                        }
                    </div>

                </>
                :
                <div
                    className="item-carrousel-mobile"
                    style={{ backgroundColor: colors[color] }}
                >
                    <div className="item-title-mobile">{title}</div>
                    <div className="item-img-mobile">
                        {Image}
                    </div>
                    <div className="item-text-mobile">
                        {text}
                    </div>

                </div>
            }
        </>
    );
};
