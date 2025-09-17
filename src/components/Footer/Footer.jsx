import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Newsletter subscription:", email);
      setIsSubscribed(true);

      // Reset form
      setEmail("");

      // Reset status after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    } catch (error) {
      console.error("Subscription error:", error);
      setTimeout(() => setIsSubscribed(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter Overlap Section */}
      <div className="newsletter-overlap">
        <div className="container">
          <div className="newsletter-overlap-content">
            <div className="newsletter-text">
              <h3>Stay Updated with SpectraCore</h3>
              <p>
                Get exclusive insights and industry updates delivered to your
                inbox
              </p>
            </div>

            {!isSubscribed ? (
              <form className="newsletter-overlap-form" onSubmit={handleSubmit}>
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    disabled={isSubmitting}
                    className={error ? "error" : ""}
                  />
                  <button
                    type="submit"
                    className="newsletter-overlap-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Subscribe
                      </>
                    )}
                  </button>
                </div>
                {error && <span className="newsletter-error">{error}</span>}
              </form>
            ) : (
              <div className="newsletter-overlap-success">
                <i className="fas fa-check-circle"></i>
                Thank you for subscribing! Check your email for confirmation.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-brand">
                <div className="footer-logo">
                  <i className="fas fa-microscope"></i>
                  <span className="brand-name">
                    <span className="spectracore">SpectraCore</span>
                    <span className="analytics">Analytics</span>
                  </span>
                </div>
                <strong>Dr. Tanu Mittal</strong>
                <p className="footer-description">
                  Advanced analytical solutions for chemical innovation and
                  research excellence.
                </p>
                <div>
                  <img
                    alt="MSME"
                    src="../src/assets/images/msme.png"
                    className="msme-logo"
                  />{" "}
                </div>
                <div>
                  UDYAM Registration: <b>UDYAM-UP-43-0156548</b>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="#services">Material Characterization</a>
                </li>
                <li>
                  <a href="#services">Process Optimization</a>
                </li>
                <li>
                  <a href="#services">Quality Assurance</a>
                </li>
                <li>
                  <a href="#services">Research & Development</a>
                </li>
                <li>
                  <a href="#services">Consulting Services</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#service">Services</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#location">Location</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>

                  <div>
                    <strong>Dr .Tanu Mittal</strong>
                    <p>
                      Main Unit H2, Old SBRA,Indian Institute of Technology
                      Kanpur Kanpur, Uttar Pradesh 208016 India .
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+91 9910127966</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
<<<<<<< HEAD
                  <span> Info@spectracoreAnalytics.in</span>
=======
                  <span>info@spectracoreanalytics.in</span>
>>>>>>> 9f32e010bfefb4cfa2a9043fd8dac796f2942ba2
                </div>
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <span>Mon - Fri: 9AM - 5PM PST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 SpectraCore Analytics. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
