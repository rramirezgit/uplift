import { Merch, Metaverse, NextButton, Nft, PrevButton, Rock, Snacks, Sponsor, Streaming, Subscription, Ticket } from 'assets';
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
            text: 'Tokenize your products. Wether are songs, photos, personal items, special access. Remember, anything can be a token!',
            Image: <Nft />,
            color: "purple"
        },
        {
            id: 2,
            title: 'ticketing',
            text: 'Take advantage of your our own ticketing, box-office and access control platform. Even connect to the most popular ticket sales companies world wide and expand your sales channels',
            Image: <Ticket />,
            color: "red"
        },
        {
            id: 3,
            title: 'metaverse',
            text: 'Be a part of the future of entertainment. There is no need to be a tech expert or a huge star to join the Metaverse space',
            Image: <Metaverse />,
            color: "light_blue"

        },
        {
            id: 4,
            title: 'merch',
            text: 'Simple. Sell your perch online. No need to keep an inventory, connect the best Merch companies and sell on demand',
            Image: <Merch />,
            color: "yellow"

        },
        {
            id: 5,
            title: 'crowdfunding',
            text: 'Expand your horizons. Go were your fans want you to go. Crowdfund tour dates in places you would have never guessed and secure your performances. ',
            Image: <Rock />,
            color: "orange"
        },
        {
            id: 6,
            title: 'Streaming',
            text: 'Reach a greater audience using your own streaming channel. Weather live performances or on demand let your fans enjoy the show wherever they are',
            Image: <Streaming />,
            color: "purple"
        },
        {
            id: 7,
            title: 'Snacks & Drinks',
            text: 'Get the most out of your performances. Pre-sell all the snacks & drinks through your own platform. ',
            Image: <Snacks />,
            color: "red"
        },
        {
            id: 8,
            title: 'Subscription',
            text: 'Reward you most loyal fans! Offer exclusive access to unique content and let them keep up with you.',
            Image: <Subscription />,
            color: "yellow"
        },
        {
            id: 9,
            title: 'Sponsor',
            text: 'Expand your revenue models by allowing Brands, Promoters and others being able to reach you and promote their services ',
            Image: <Sponsor />,
            color: "orange"
        },
    ];

    const handleHover = (e:any) => {
        e.target.parentNode.style.marginRight = "7px !important";
    }
    const handleLeave = (e:any) => {
        e.target.parentNode.style.marginRight = "0px !important"
    }


    const itemList = () => (
        items.map((item, i) => (
            <ItemCarrousel key={i} {...item} onMouseHover={handleHover} onMouseLeave={handleLeave} />
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

