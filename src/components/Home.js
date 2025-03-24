import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Style.css";
import { motion } from "framer-motion";
import pool from "./../../asset/pool.jpg";
import beach from "./../../asset/beach.jpg";
import Vip_carousel from "./carousol/Vip_carousel";
import Footer from "./Footer";
import Contact from "./Contact";
import RoomCard from "./room_card";
import Checkout from "./checkout";
export default function Home() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            }
            else {
                setShowButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { scrollToSection: scrollToSection }), _jsx("section", { id: "home", children: _jsxs("div", { className: "hero-container", children: [_jsx("img", { src: pool, alt: "Pool", className: "hero-image" }), _jsxs(motion.div, { className: "hero-text", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.5, ease: "easeOut" }, children: [_jsx("h1", { children: "Welcome to Sunset Breeze" }), _jsx("p", { children: "Experience luxury and comfort" }), _jsx("button", { type: "button", className: "btn btn-outline-light", children: "Book Now" })] }), _jsx("div", { className: "booking-outer", children: _jsx("div", { className: "booking-section", children: _jsx(Checkout, {}) }) })] }) }), _jsx("section", { id: "about", children: _jsxs("div", { className: "about", children: [_jsxs(motion.div, { className: "about-left", initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 1, ease: "easeOut" }, viewport: { once: true }, children: [_jsx("h2", { children: "- About -" }), _jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis hendrerit orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur bibendum ligula urna, a tincidunt dolor viverra quis. Maecenas consectetur lacus turpis, Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur bibendum ligula urna, a tincidunt dolor viverra quis. Maecenas consectetur lacus turpis, eu fermentum diam porta at. Duis volutpat varius enim vel scelerisque." }), _jsx("hr", {})] }), _jsx(motion.div, { className: "about-right", initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 1, ease: "easeOut" }, viewport: { once: true }, children: _jsx(motion.img, { src: beach, alt: "Resort", initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 1, delay: 0.5, ease: "easeOut" }, viewport: { once: true } }) })] }) }), _jsx("br", {}), _jsx("section", { id: "services", children: _jsx("div", { className: "vip", children: _jsx(Vip_carousel, {}) }) }), _jsx("section", { id: "rooms", children: _jsxs("div", { className: "rooms", children: [_jsx("h2", { children: "- Rooms- " }), _jsx("div", { className: "room-cards", children: _jsx(RoomCard, {}) })] }) }), _jsx("section", { id: "contacts", children: _jsx("div", { className: "contacts", children: _jsx(Contact, {}) }) }), _jsx("footer", { children: _jsx(Footer, {}) }), showButton && (_jsx(motion.button, { className: "back-to-top", onClick: scrollToTop, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 }, children: "\u2191" }))] }));
}
