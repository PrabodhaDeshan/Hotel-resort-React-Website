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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <img src={logo} alt="Pool" className="hero-image" />
        </h1>
        <div className="menu-wrapper">
          <div className="menu-icon" onClick={toggleNavbar}>
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="links">
          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a href="#home" className="nav-links" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#rooms" className="nav-links" onClick={() => scrollToSection("rooms")}>
                Rooms
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-links" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
