import { Merch, Metaverse, NextButton, Nft, PrevButton, Rock, Sponsor, Streaming, Subscription, Ticket } from 'assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ItemCarrousel } from './item/index';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './styles.css';
import { ReactComponentElement, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

type typeItem = {
    id: number;
    title: string;
    text: string;
    Image: ReactComponentElement<any>;
    color: "purple" | "red" | "light_blue" | "yellow" | "orange" | "core_blue" | "dark_blue";
}

export const Carrousel = () => {
    const AliceCarrousel = useRef<any>(null);
    const items: typeItem[] = [
        {
            id: 1,
            title: 'nft',
            text: 'loreum ipsum',
            Image: <Nft/>,
            color: "purple"
        },
        {
            id: 2,
            title: 'ticketing',
            text: 'Take advantage of your our own ticketing, box-office and access control platform. Even connect to the most popular ticket sales companies world wide and expand your sales channels',
            Image: <Ticket/>,
            color: "red"
        },
        {
            id: 3,
            title: 'metaverse',
            text: 'loreum ipsum',
            Image: <Metaverse/>,
            color: "light_blue"

        },
        {
            id: 4,
            title: 'merch',
            text: 'loreum ipsum',
            Image: <Merch/>,
            color: "yellow"

        },
        {
            id: 5,
            title: 'crowdfunding',
            text: 'loreum ipsum',
            Image: <Rock/>,
            color: "orange"
        },
        {
            id: 6,
            title: 'Streaming',
            text: 'loreum ipsum',
            Image: <Streaming/>,
            color: "purple"
        },
        {
            id: 7,
            title: 'Snacks & Drinks',
            text: 'loreum ipsum',
            Image: <Rock/>,
            color: "red"
        },
        {
            id: 8,
            title: 'Subscription',
            text: 'loreum ipsum',
            Image: <Subscription/>,
            color: "yellow"
        },
        {
            id: 9,
            title: 'Sponsor',
            text: 'loreum ipsum',
            Image: <Sponsor/>,
            color: "orange"
        },
    ];


    const itemList = () => (
        items.map(item => (
            <ItemCarrousel  {...item} />
        ))
    )

    return (
        <>

            <AliceCarousel
                autoWidth
                mouseTracking
                items={itemList()}
                disableDotsControls={true}
                infinite={true}
                ref={AliceCarrousel}
            />
            <PrevButton className="prev-btn-custom" onClick={() => AliceCarrousel?.current?.slidePrev()}>Prev button</PrevButton>
            <NextButton className="next-btn-custom" onClick={() => AliceCarrousel?.current?.slideNext()}>Next div</NextButton>
        </>
    );
}

