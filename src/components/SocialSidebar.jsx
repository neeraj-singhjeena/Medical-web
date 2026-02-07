import React from "react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function SocialSidebar() {
  return (
    <>
      {/* ✅ Desktop Sidebar (Mobile pe hidden) */}
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
          {/* <li className="social-item">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover facebook"
            >
              <FaFacebookF size={18} />
              <span className="social-text">Facebook</span>
            </a>
          </li> */}
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
        `}
      </style>
    </>
  );
}

export default SocialSidebar;
