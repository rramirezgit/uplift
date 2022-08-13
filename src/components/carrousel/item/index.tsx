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
                tabIndex={0}
                style={{ backgroundColor: colors[color] }}
                onMouseEnter={(e) => {
                    setIsHover(true)
                    onMouseHover(e)
                }}
                onMouseLeave={(e) => {
                    setIsHover(false)
                    onMouseLeave(e)
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
