import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Services data
  const services = [
    "Research & Consulting",
    "Analytical Testing & Method Development",
    "Computational Chemistry & Modeling",
    "Process & Scale-Up Solutions",
    "Data Analysis & Visualization",
    "Publication & Reporting Support",
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Menu state tracking
  useEffect(() => {
    const handleShow = () => setMenuOpen(true);
    const handleHide = () => setMenuOpen(false);

    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu) {
      mobileMenu.addEventListener("show.bs.offcanvas", handleShow);
      mobileMenu.addEventListener("hide.bs.offcanvas", handleHide);
    }

    return () => {
      if (mobileMenu) {
        mobileMenu.removeEventListener("show.bs.offcanvas", handleShow);
        mobileMenu.removeEventListener("hide.bs.offcanvas", handleHide);
      }
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    const closeBtn = document.querySelector("#mobileMenu .btn-close");
    if (closeBtn) closeBtn.click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create WhatsApp message with proper formatting
    const message = `New Appointment Request:%0A%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Service:* ${formData.service}%0A
*Preferred Date:* ${formData.date}%0A
*Preferred Time:* ${formData.time}%0A
*Message:* ${formData.message || "No additional message provided"}`;

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/919910127966?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Reset form and show success message
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });

    setSubmitted(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      // Close modal
      const modal = document.getElementById("appointmentModal");
      const modalInstance = window.bootstrap?.Modal?.getInstance
        ? window.bootstrap.Modal.getInstance(modal)
        : null;
      if (modalInstance) {
        modalInstance.hide();
      }
    }, 5000);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-md fixed-top ${
          scrolled ? "navbar-colored shadow-sm" : "navbar-transparent"
        }`}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between px-3 px-md-4">
          {/* Brand Name */}
          <a className="navbar-brand fw-bold brand-text" href="/">
            <span className="brand-teal">Spectracore</span>{" "}
            <span className="brand-white">Analytics</span>
          </a>

          {/* Mobile toggle with animated hamburger */}
          <button
            className={`navbar-toggler custom-toggler ${
              menuOpen ? "open" : ""
            }`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          {/* Desktop menu */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav fw-bold ms-auto">
              {["home", "services", "about", "contact"].map((id) => (
                <li className="nav-item mx-2" key={id}>
                  <a
                    className="nav-link"
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                  >
                    {id === "about"
                      ? "About Us"
                      : id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side button (Desktop only) */}
          <div className="d-none d-md-flex ms-3">
            <button
              className="btn contact-btn"
              data-bs-toggle="modal"
              data-bs-target="#appointmentModal"
            >
              Make Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas */}
      <div
        className="offcanvas offcanvas-end bg-dark text-white"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-accent">Spectracore Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav fw-bold mb-3">
            {["home", "services", "about", "contact"].map((id) => (
              <li className="nav-item mb-2" key={id}>
                <a
                  className="nav-link text-white"
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {id === "about"
                    ? "About Us"
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Button */}
          <button
            className="btn contact-btn w-100"
            data-bs-toggle="modal"
            data-bs-target="#appointmentModal"
          >
            Make Appointment
          </button>
        </div>
      </div>

      {/* Appointment Modal */}
      <div
        className="modal fade"
        id="appointmentModal"
        tabIndex="-1"
        aria-labelledby="appointmentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-3 rounded-3">
            <div className="modal-header border-0">
              <h5
                className="modal-title fw-bold modal-title-teal"
                id="appointmentModalLabel"
              >
                Book an Appointment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {submitted ? (
                <div className="alert alert-success text-center" role="alert">
                  <i className="fas fa-check-circle me-2"></i>
                  Thank you for your appointment request! We'll contact you
                  shortly.
                </div>
              ) : (
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Service *</label>
                    <select
                      className="form-select"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Preferred Date *</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Preferred Time *</label>
                    <input
                      type="time"
                      className="form-control"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Any additional details"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="col-12 text-end">
                    <button type="submit" className="btn contact-btn">
                      <i className="fab fa-whatsapp me-2"></i>
                      Submit via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
          }
          .navbar-transparent {
            background: transparent;
            transition: background 0.6s ease, color 0.6s ease;
          }
          .navbar-colored {
            background: #0b1b36;
            transition: background 0.6s ease, color 0.6s ease;
          }
          .navbar {
            padding-top: 12px;
            padding-bottom: 14px;
          }
          .brand-teal { color: #2AD2C1; }
          .brand-white { color: #fff; }
          .nav-link {
            font-size: 15px;
            font-weight: 500;
            color: #fff !important;
            padding: 8px 12px;
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: #00FB8A !important;
          }
          .contact-btn {
            background: linear-gradient(45deg, #24B7D3, #30EFAD);
            color: #fff;
            font-weight: 600;
            font-size: 14px;
            border-radius: 30px;
            padding: 10px 22px;
            transition: all 0.3s ease;
            border: none;
            white-space: nowrap;
          }
          .contact-btn:hover {
            background: #00FB8A;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }
          .modal-title-teal { color: #2AD2C1 !important; }
          .custom-toggler { 
            border: none;
            background: transparent !important;
            width: 30px;
            height: 30px;
            position: relative;
            padding: 0;
          }
          .hamburger-box {
            width: 30px;
            height: 24px;
            display: inline-block;
            position: relative;
          }
          .hamburger-inner {
            display: block;
            top: 50%;
            margin-top: -2px;
          }
          .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
            width: 30px;
            height: 3px;
            background-color: #fff;
            border-radius: 3px;
            position: absolute;
            transition: transform 0.3s ease;
          }
          .hamburger-inner::before, .hamburger-inner::after {
            content: "";
            display: block;
          }
          .hamburger-inner::before {
            top: -10px;
          }
          .hamburger-inner::after {
            bottom: -10px;
          }
          
          /* Hamburger animation to X when open */
          .custom-toggler.open .hamburger-inner {
            transform: rotate(45deg);
          }
          .custom-toggler.open .hamburger-inner::before {
            top: 0;
            transform: rotate(0);
            opacity: 0;
          }
          .custom-toggler.open .hamburger-inner::after {
            bottom: 0;
            transform: rotate(-90deg);
          }
          .text-accent { color: #00FB8A !important; }
          
          /* Form styling */
          .form-label {
            font-weight: 500;
            color: #0b1b36;
          }
          
          .alert-success {
            background: linear-gradient(45deg, #2AD2C1, #30EFAD);
            color: #0b1b36;
            border: none;
            font-weight: 500;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
