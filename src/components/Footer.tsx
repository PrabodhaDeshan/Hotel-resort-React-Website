import React from 'react';
import './footer.css'; 
import logo2 from './../../asset/logo2.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo2} alt="Company Logo" className="logo" />
        </div>
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/services" className="footer-link">Services</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-social">
         <a href="https://facebook.com" className="social-link"><FaFacebook /> Facebook </a>
          <a href="https://twitter.com" className="social-link"> <FaTwitter />  Twitter</a>
          <a href="https://instagram.com" className="social-link"> <FaInstagram /> Instagram</a>
        </div>
        <div className="footer-subscribe">
          <h4>Subscribe to our Newsletter</h4>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
              required
            />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sunset Breez. All rights reserved.</p>
        {/* <p>Deign and developed by Prabodha Deshan</p> */}
      </div>
    </footer>
  );
}

export default Footer;