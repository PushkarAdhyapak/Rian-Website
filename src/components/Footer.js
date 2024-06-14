import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      <div className="pre-footer-text">
        <p>Ready to connect with a global audience? Contact us today and let's bring your videos to life on a global scale.</p>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="footer-right">
            <div className="footer-section navigation">
              <h2>Navigation</h2>
              <ul>
                <li><a href="https://www.instagram.com/">Home</a></li>
                <li><a href="https://www.instagram.com/">About Us</a></li>
                <li><a href="https://www.instagram.com/">Services</a></li>
                <li><a href="https://www.instagram.com/">Features</a></li>
              </ul>
            </div>
            <div className="footer-section contact">
              <h2>Contact</h2>
              <ul>
                <li>9823959012</li>
                <li>Sales Enquiry</li>
                <li>Address</li>
                <li>Shivajinagar, Pune 411004</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2020 All rights reserved | Follow us on:</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/channel/UCNyfv71KD7roDPonTcKDnFQ"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/rian-io"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
