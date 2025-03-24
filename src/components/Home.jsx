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
import Checkout from "./Checkout";

export default function Home() {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
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

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />

      <section id="home">
        <div className="hero-container">
          <img src={pool} alt="Pool" className="hero-image" />
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1>Welcome to Sunset Breeze</h1>
            <p>Experience luxury and comfort</p>
            <button type="button" className="btn btn-outline-light">
              Book Now
            </button>
          </motion.div>
          <div className="booking-outer">
            <div className="booking-section">
              <Checkout />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }} // Ensures animation only happens once
          >
            <h2>- About -</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              quis hendrerit orci. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Curabitur bibendum ligula
              urna, a tincidunt dolor viverra quis. Maecenas consectetur lacus
              turpis, Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Curabitur bibendum ligula urna, a
              tincidunt dolor viverra quis. Maecenas consectetur lacus turpis, eu
              fermentum diam porta at. Duis volutpat varius enim vel scelerisque.
            </p>
            <hr />
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src={beach}
              alt="Resort"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </section>

      <br />

      <section id="services">
        <div className="vip">
          <Vip_carousel />
        </div>
      </section>

      <section id="rooms">
        <div className="rooms">
          <h2>- Rooms- </h2>
          <div className="room-cards">
            <RoomCard />
          </div>
        </div>
      </section>

      <section id="contacts">
        <div className="contacts">
        <Contact/>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>

      {/* Back to Top Button */}
      {showButton && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          ↑
        </motion.button>
      )}
    </>
  );
}

