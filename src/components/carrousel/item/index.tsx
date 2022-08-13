import colors from 'styles/colors';
import './styles.css'
import { useState } from 'react';

interface ItemCarrouselProps {
    title?: string;
    id?: number;
    text?: string;
    Image?: React.ReactElement;
    color: "purple" | "red" | "light_blue" | "yellow" | "orange" | "core_blue" | "dark_blue";
    onMouseHover?: any
}

export const ItemCarrousel = ({
    id,
    title,
    text,
    Image,
    color,
    onMouseHover,
}: ItemCarrouselProps) => {
    const [isHover, setIsHover] = useState(false);

    const delayClass = () => {
        setTimeout(() => {
            const data = document.querySelector('.data-hover') as HTMLElement
            data.style.display = "block"
        }, 200);

        return (
            <>
                <div style={{ display: "none" }} className="data-hover">
                    <div className="item-title-hover">{title}</div>
                    <div className="item-text">
                        {text}
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="item-carrousel"
                style={{ backgroundColor: colors[color] }}
                onMouseEnter={() => {
                    setIsHover(true)
                    onMouseHover()
                }}
                onMouseLeave={() => {
                    setIsHover(false)
                }
                }
            >
                <div className="item-title">{title}</div>
                <div className="item-img">
                    {Image}
                </div>

                {isHover &&
                    delayClass()
                }
            </div>
        </>
    );
};
