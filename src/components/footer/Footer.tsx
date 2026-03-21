import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/textless_logo.png";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-content">
        <div className="footer-main">
          <ul className="footer-links">
            <li>
              <NavLink to="/about">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/events">EVENTS</NavLink>
            </li>
            <li>
              <NavLink to="/publications">PUBLICATIONS</NavLink>
            </li>
            <li>
              <NavLink to="/sponsors">SPONSORS</NavLink>
            </li>
          </ul>
          <div className="footer-join">
            <a
              href="https://clubs.msa.monash.edu/organisation/7005/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN US
            </a>
          </div>
        </div>
        <div className="footer-newsletter">
          <h3>OUR NEWSLETTER</h3>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
