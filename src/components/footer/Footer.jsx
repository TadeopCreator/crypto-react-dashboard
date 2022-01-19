import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <img src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png" alt="" className="gecko-icon"></img>
        <span className="footer-text">Thanks to CoinGecko</span>
        <span className="copyright">	&copy; Tadeop 2022</span>
      </div>
    );
};

export default Footer;
