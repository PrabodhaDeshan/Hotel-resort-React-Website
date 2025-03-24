import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
const Contact = () => {
    return (_jsxs("section", { id: "contact", className: "contact-section", children: [_jsxs("div", { className: "contact-container", children: [_jsxs(motion.div, { className: "contact-form", initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 1, ease: "easeOut" }, viewport: { once: true }, children: [_jsx("h2", { children: "Get in Touch" }), _jsx("p", { children: "We'd love to hear from you! Send us a message." }), _jsxs("form", { children: [_jsx("div", { className: "form-group", children: _jsx("input", { type: "text", placeholder: "Your Name", required: true }) }), _jsx("div", { className: "form-group", children: _jsx("input", { type: "email", placeholder: "Your Email", required: true }) }), _jsx("div", { className: "form-group", children: _jsx("textarea", { placeholder: "Your Message", rows: "5", required: true }) }), _jsx("button", { type: "submit", className: "submit-button", children: "Send Message" })] })] }), _jsxs(motion.div, { className: "contact-info", initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 1, ease: "easeOut" }, viewport: { once: true }, children: [_jsx("h2", { children: "Contact Information" }), _jsx("p", { children: "Feel free to reach out to us via email, phone, or social media." }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("strong", { children: "Email:" }), " info@sunsetbreezesample.com"] }), _jsxs("li", { children: [_jsx("strong", { children: "Phone:" }), " +94 0000000"] }), _jsxs("li", { children: [_jsx("strong", { children: "Address:" }), " 123 Sunsetbreez, Colombo"] })] }), _jsxs("div", { className: "social-media", children: [_jsx("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("i", { className: "fab fa-facebook-f" }) }), _jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("i", { className: "fab fa-twitter" }) }), _jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("i", { className: "fab fa-instagram" }) }), _jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("i", { className: "fab fa-linkedin-in" }) })] })] })] }), _jsx("div", { className: "map-container", children: _jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2d2f2f2f2f2!2sSunset%20Breeze%20Resort!5e0!3m2!1sen!2sus!4v1622549400000!5m2!1sen!2sus", width: "100%", height: "400", style: { border: 0 }, allowFullScreen: "", loading: "lazy" }) })] }));
};
export default Contact;
