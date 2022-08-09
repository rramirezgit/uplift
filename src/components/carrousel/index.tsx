import { ItemCarrousel } from './item/index';
import './styles.css';

type typeItem = {
    id: number;
    title: string;
    text: string;
    image: string;
    color:  "purple" | "red" | "light_blue" | "yellow" | "orange" | "core_blue" | "dark_blue";
}

export const Carrousel = () => {

    const items:typeItem[] = [
        {
            id: 1,
            title: 'nft',
            text: 'loreum ipsum',
            image: 'https://picsum.photos/200/300',
            color: "purple"
        },
        {
            id: 2,
            title: 'ticketing',
            text: 'Take advantage of your our own ticketing, box-office and access control platform. Even connect to the most popular ticket sales companies world wide and expand your sales channels',
            image: 'https://picsum.photos/200/300',
            color: "orange"
        },
        {
            id: 3,
            title: 'metaverse',
            text: 'loreum ipsum',
            image: 'https://picsum.photos/200/300',
            color: "light_blue"

        },
        {
            id: 4,
            title: 'merch',
            text: 'loreum ipsum',
            image: 'https://picsum.photos/200/300',
            color: "yellow"

        },
        {
            id: 5,
            title: 'crowdfunding',
            text: 'loreum ipsum',
            image: 'https://picsum.photos/200/300',
            color: "orange"
        },
    
    ];

    return (
        <div className="carrousel">
            {
                items.map(item => (
                    <ItemCarrousel key={item.id} {...item} />
                ))
            }
        </div>
    );
};
