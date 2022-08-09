import { ItemCarrousel } from './item/index';
import './styles.css';

export const Carrousel = () => {
    const items = [
        {
            id: 1,
            title: 'nft',
            text: 'loreum ipsum',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            title: 'ticketing',
            text: 'Take advantage of your our own ticketing, box-office and access control platform. Even connect to the most popular ticket sales companies world wide and expand your sales channels',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            title: 'metaverse',
            text: 'loreum ipsum',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 4,
            title: 'merch',
            text: 'loreum ipsum',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 5,
            title: 'crowdfunding',
            text: 'loreum ipsum',
            image: 'https://picsum.photos/200/300',
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
