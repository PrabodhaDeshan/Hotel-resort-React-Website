import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../../asset/logo.png";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };
    return (_jsx("nav", { className: "navbar", children: _jsxs("div", { className: "navbar-container", children: [_jsx("h1", { className: "navbar-logo", children: _jsx("img", { src: logo, alt: "Pool", className: "hero-image" }) }), _jsx("div", { className: "menu-wrapper", children: _jsx("div", { className: "menu-icon", onClick: toggleNavbar, children: _jsxs("div", { className: `hamburger ${isOpen ? "open" : ""}`, children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }) }) }), _jsx("div", { className: "links", children: _jsxs("ul", { className: `nav-menu ${isOpen ? "active" : ""}`, children: [_jsx("li", { className: "nav-item", children: _jsx("a", { href: "#home", className: "nav-links", onClick: () => scrollToSection("home"), children: "Home" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { href: "#about", className: "nav-links", onClick: () => scrollToSection("about"), children: "About" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { href: "#rooms", className: "nav-links", onClick: () => scrollToSection("rooms"), children: "Rooms" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { href: "#contact", className: "nav-links", onClick: () => scrollToSection("contact"), children: "Contact" }) })] }) })] }) }));
}
