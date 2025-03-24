import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/CardCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../carousol/carousel.css";
import food from "./../../../asset/food.jpg";
import spa from "./../../../asset/spa.jpg";
import outdoor from "./../../../asset/outdoor.jpg";
const CardCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };
    const cards = [
        {
            id: 1,
            title: "Swimming pool",
            content: "Dive into pure bliss at our stunning swimming pool, surrounded by lush greenery and breathtaking views. Whether you're looking to take a refreshing swim, lounge by the poolside with a cocktail, or enjoy a fun splash with family and friends, our pool offers the perfect setting. With crystal-clear waters and comfortable seating, it's the ideal spot to relax and unwind under the sun.",
            image: outdoor,
        },
        {
            id: 2,
            title: "Dining",
            content: "Experience an unforgettable culinary journey at our restaurant, where exquisite flavors and fresh ingredients come together. From gourmet international dishes to local specialties, our chefs craft each meal with passion and creativity. Whether you prefer a romantic candlelit dinner, a casual family meal, or a delightful breakfast by the terrace, our dining experience promises to satisfy every craving.",
            image: food,
        },
        {
            id: 3,
            title: "Spa",
            content: "Indulge in ultimate relaxation at our luxurious spa, where tranquility meets rejuvenation. Our expert therapists offer a range of soothing treatments, from deep tissue massages to revitalizing facials, designed to melt away stress and leave you feeling refreshed. With a serene ambiance, aromatic essential oils, and personalized care, our spa is the perfect retreat for a peaceful escape.",
            image: spa,
        },
    ];
    return (_jsx("div", { className: "card-carousel", children: _jsx(Slider, Object.assign({}, settings, { children: cards.map((card) => (_jsx("div", { className: "card", children: _jsxs("div", { className: "card-content", children: [_jsx("div", { className: "card-image", children: _jsx("img", { src: card.image, alt: card.title }) }), _jsxs("div", { className: "card-text", children: [_jsx("h3", { children: card.title }), _jsx("p", { children: card.content })] })] }) }, card.id))) })) }));
};
export default CardCarousel;
