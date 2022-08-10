import colors from 'styles/colors';
import './styles.css'

interface ItemCarrouselProps {
    title: string;
    id: number;
    text: string;
    Image: React.FC<React.SVGProps<SVGSVGElement>>;
    color: "purple" | "red" | "light_blue" | "yellow" | "orange" | "core_blue" | "dark_blue";
}

export const ItemCarrousel = ({
    id,
    title,
    text,
    Image,
    color
}: ItemCarrouselProps) => {
    return (
        <div className="item-carrousel"
            style={{ backgroundColor: colors[color] }}
        >
            {/* <div className="item-title">{title}</div> */}
            {/* <Image /> */}
        </div>
    );
};
