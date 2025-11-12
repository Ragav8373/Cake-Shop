import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaPinterest, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, url: "https://twitter.com/ailacakes", label: "Twitter" },
    { icon: <FaFacebook />, url: "https://facebook.com/ailacakes", label: "Facebook" },
    { icon: <FaPinterest />, url: "https://pinterest.com/ailacakes", label: "Pinterest" },
    { icon: <FaInstagram />, url: "https://instagram.com/ailacakes", label: "Instagram" }
  ];

  const openMap = () => {
    window.open("https://maps.google.com/?q=Kooraikundu,Tamil Nadu", "_blank");
  };

  return (
    <footer className="footer">
      <Container>
        {/* Main Grid - 4 Columns */}
        <Row className="footer-grid">
          
          {/* Column 1: About */}
          <Col xs={12} sm={6} lg={3} className="footer-column">
            <div className="footer-logo-section">
              <div className="footer-logo-circle">
                <span className="footer-logo-text">AC</span>
              </div>
              <h3 className="footer-brand-name">Aila Cakes</h3>
            </div>
            <p className="footer-about-text">
              We're providing every day fresh and quality products for you. Our passion is to make your special moments sweeter!
            </p>
            <div className="footer-social-container">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer-social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* Column 2: Quick Links */}
          <Col xs={12} sm={6} lg={3} className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-link-list">
              {['Home', 'About Us', 'Our Menu', 'Gallery', 'Blog'].map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Column 3: Customer Care */}
          <Col xs={12} sm={6} lg={3} className="footer-column">
            <h4 className="footer-heading">Customer Care</h4>
            <ul className="footer-link-list">
              {['Contact Us', 'Our Services', 'Order Online', 'Cancellation & Refund', 'Terms & Conditions', 'Privacy Policy'].map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Column 4: Contact Info */}
          <Col xs={12} sm={6} lg={3} className="footer-column">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <FaMapMarkerAlt className="footer-contact-icon" />
                <span className="footer-contact-text">
                  123 Cherry Street<br />
                  Kooraikundu - 626003<br />
                  Tamil Nadu
                </span>
              </li>
              <li className="footer-contact-item">
                <FaPhone className="footer-contact-icon" />
                <a href="tel:+919876543210" className="footer-contact-link">
                  +91 9876543210
                </a>
              </li>
              <li className="footer-contact-item">
                <FaEnvelope className="footer-contact-icon" />
                <a href="mailto:info@ailacakes.com" className="footer-contact-link">
                  info@ailacakes.com
                </a>
              </li>
              <li>
                <button onClick={openMap} className="footer-map-button">
                  View Map
                </button>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Divider */}
        <Row className="footer-divider">
          <Col>
            <div className="footer-bottom-section">
              <p className="footer-copyright">
                © 2025 Aila Cakes & Cafe. All Rights Reserved.
              </p>
              <div className="footer-legal-links">
                <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
                <span className="footer-separator">|</span>
                <a href="/terms" className="footer-legal-link">Terms of Service</a>
                <span className="footer-separator">|</span>
                <a href="/sitemap" className="footer-legal-link">Sitemap</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;