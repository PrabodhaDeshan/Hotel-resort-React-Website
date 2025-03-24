import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { motion } from "framer-motion";
import "./room_card.css";
import room2 from "./../../asset/room2.jpg";
import room3 from "./../../asset/room3.jpg";
import room4 from "./../../asset/room4.jpg";
import room5 from "./../../asset/room5.jpg";
import room6 from "./../../asset/room6.jpg";
import { FaTv, FaWifi } from 'react-icons/fa';
import { MdFreeBreakfast } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
function RoomCard2() {
    const rooms = [
        {
            name: "Superior Room",
            deposit: "Required 20%",
            beds: "02",
            persons: "3",
            price: "$39.00/night",
            image: room6,
            descrtiption: "Curabitur at felis non libero suscipit fermentum. ds nec ligula velit. Donec in laoreet leo.",
        },
        {
            name: "Special Room",
            deposit: "Required 20%",
            beds: "02",
            persons: "4",
            price: "$39.00/night",
            image: room3,
            descrtiption: "Curabitur at felis non libero suscipit fermentum. ds nec ligula velit. Donec in laoreet leo.",
        },
        {
            name: "Empire State Room",
            deposit: "Required 20%",
            beds: "04",
            persons: "6",
            price: "$39.00/night",
            image: room4,
            descrtiption: "Curabitur at felis non libero suscipit fermentum. ds nec pit fermentum. ds nec ligula velit. Donec in laoreet leo.",
        },
        {
            name: "Luxury Suite",
            deposit: "Required 20%",
            beds: "03",
            persons: "5",
            price: "$59.00/night",
            image: room5,
            descrtiption: "Curabitur at felis non libero suscipit fermentum. ds nec pit fermentum. ds nec ligula velit. Donec in laoreet leo.",
        },
        {
            name: "Empire State Room",
            deposit: "Required 20%",
            beds: "04",
            persons: "6",
            price: "$39.00/night",
            image: room4,
            descrtiption: "Curabitur at felis non libero suscipit fermentum. ds nec pit fermentum. ds nec ligula velit. Donec in laoreet leo.",
        },
        {
            name: "Luxury Suite",
            deposit: "Required 20%",
            beds: "03",
            persons: "5",
            price: "$59.00/night",
            image: room5,
            descrtiption: "Curabitur at felis non libero suscipit fermentum. ds nec pit fermentum. ds nec ligula velit. Donec in laoreet leo.",
        },
        {
            name: "Empire State Room",
            deposit: "Required 20%",
            beds: "04",
            persons: "6",
            price: "$39.00/night",
            image: room6,
            descrtiption: "Curabitur at felis non libero suscipitfermentum. ds nec pit fermentum. ds nec ligula velit. Donec in laoreet leo.",
        },
        {
            name: "Luxury Suite",
            deposit: "Required 20%",
            beds: "03",
            persons: "5",
            price: "$59.00/night",
            image: room2,
            descrtiption: "Curabitur at felis non libero suscipit fermentum. ds nec pit fermentum. ds nec ligula velit. Donec in laoreet leo.",
        },
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    };
    return (_jsx(motion.div, { className: "card2-container", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 }, children: rooms.map((room, index) => (_jsxs(motion.div, { className: "card2", variants: cardVariants, children: [_jsx("img", { src: room.image, alt: room.name, className: "card2-image" }), _jsxs("div", { className: "card2-content", children: [_jsx("h3", { children: room.name }), _jsx("p", { children: room.descrtiption }), _jsxs("div", { className: "icons", children: [_jsx(FaTv, {}), " ", _jsx(FaWifi, {}), " ", _jsx(MdFreeBreakfast, {}), " ", _jsx(GiKnifeFork, {})] }), _jsx("hr", {}), _jsxs("div", { className: "book", children: [_jsx("button", { type: "button", className: "btn", children: "Book Now" }), _jsx("h6", { children: "LKR 5000/=" })] })] })] }, index))) }));
}
export default RoomCard2;
