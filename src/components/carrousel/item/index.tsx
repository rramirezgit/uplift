import './styles.css'

interface ItemCarrouselProps {
    title: string;
    id: number;
    text: string;
    image: string;
    color:  "purple" | "red" | "light_blue" | "yellow" | "orange" | "core_blue" | "dark_blue";
}

export const ItemCarrousel = ({
    id,
    title,
    text,
    image,
    color
}:ItemCarrouselProps) => {
    return (
        <div className="item-carrousel" 
        style={{backgroundColor: color}}
        >
        </div>
    );
};
