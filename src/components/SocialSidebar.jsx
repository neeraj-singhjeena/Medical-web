import React, { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SocialSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ Desktop Sidebar */}
      <div
        className="d-none d-md-block position-fixed top-50 translate-middle-y"
        style={{ right: "20px", zIndex: 2000 }}
      >
        <ul className="list-unstyled m-0 p-0 d-flex flex-column gap-3">
          <li className="social-item">
            <a
              href="https://wa.me/919910127966"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover whatsapp"
            >
              <FaWhatsapp size={20} />
              <span className="social-text">WhatsApp</span>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover facebook"
            >
              <FaFacebookF size={18} />
              <span className="social-text">Facebook</span>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover linkedin"
            >
              <FaLinkedinIn size={18} />
              <span className="social-text">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>

      {/* ✅ Mobile Sidebar */}
      <div
        className="d-block d-md-none position-fixed top-50 translate-middle-y"
        style={{ right: "10px", zIndex: 2000 }}
      >
        {/* Toggle Button */}
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
          {open ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {/* Mobile Icons - Only show when open is true */}
        {open && (
          <div className="mobile-icons">
            <a
              href="https://wa.me/919910127966"
              target="_blank"
              rel="noopener noreferrer"
              className="social-mobile whatsapp"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-mobile facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-mobile linkedin"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        )}
      </div>

      {/* ✅ CSS Styling */}
      <style>
        {`
          /* Desktop icons */
          .social-item {
            position: relative;
            display: flex;
            justify-content: flex-end;
          }
          
          .social-hover {
            display: flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #24B7D3, #30EFAD);
            color: #fff;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 30px 0 0 30px;
            transition: all 0.4s ease;
            width: 50px;
            overflow: hidden;
            position: relative;
          }

          .social-text {
            opacity: 0;
            white-space: nowrap;
            transition: all 0.4s ease;
            position: absolute;
            right: 45px;
            width: 0;
          }

          .social-hover:hover {
            width: 150px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.25);
            background: #00FB8A; /* Accent */
          }

          .social-hover:hover .social-text {
            opacity: 1;
            width: auto;
          }

          /* Mobile Sidebar Toggle Button */
          .toggle-btn {
            background: linear-gradient(135deg, #24B7D3, #30EFAD);
            color: white;
            border: none;
            border-radius: 50%;
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.25);
            transition: all 0.3s ease;
            z-index: 2001;
            position: relative;
          }

          .toggle-btn:hover {
            background: #00FB8A; /* Accent */
            transform: scale(1.1);
          }

          /* Mobile Icons */
          .mobile-icons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 15px;
            animation: fadeIn 0.3s ease;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .social-mobile {
            background: linear-gradient(135deg, #24B7D3, #30EFAD);
            color: white;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            animation: slideIn 0.3s ease;
          }

          .social-mobile:nth-child(1) { animation-delay: 0.1s; }
          .social-mobile:nth-child(2) { animation-delay: 0.2s; }
          .social-mobile:nth-child(3) { animation-delay: 0.3s; }

          @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .social-mobile:hover {
            background: #00FB8A; /* Accent */
            transform: scale(1.2);
            box-shadow: 0 6px 15px rgba(0,0,0,0.25);
          }
        `}
      </style>
    </>
  );
}

export default SocialSidebar;
