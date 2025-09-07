import React, { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
          <li>
            <a
              href="https://wa.me/919815723616"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover whatsapp"
            >
              <FaWhatsapp size={20} />
              <span>WhatsApp</span>
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover facebook"
            >
              <FaFacebookF size={18} />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-hover linkedin"
            >
              <FaLinkedinIn size={18} />
              <span>LinkedIn</span>
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
        <button className="toggle-btn mb-3" onClick={() => setOpen(!open)}>
          {open ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {/* Mobile Icons */}
        <div className={`mobile-icons ${open ? "show" : ""}`}>
          <a
            href="https://wa.me/919815723616"
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
      </div>

      {/* ✅ CSS Styling */}
      <style>
        {`
          /* Desktop icons */
          .social-hover {
            display: flex;
            align-items: center;
            gap: 10px;
            background: #333;
            color: #fff;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 30px 0 0 30px;
            transition: all 0.4s ease;
            transform: translateX(40%);
          }

          .social-hover span {
            opacity: 0;
            white-space: nowrap;
            transition: opacity 0.4s ease, margin-left 0.4s ease;
          }

          .social-hover:hover {
            transform: translateX(0);
            box-shadow: 0 6px 15px rgba(0,0,0,0.25);
          }

          .social-hover:hover span {
            opacity: 1;
            margin-left: 5px;
          }

          /* Colors */
          .whatsapp { background: #25D366; }
          .facebook { background: #1877F2; }
          .linkedin { background: #0A66C2; }

          .social-hover:hover.whatsapp { background: #1ebe5d; }
          .social-hover:hover.facebook { background: #145dbf; }
          .social-hover:hover.linkedin { background: #084a8f; }

          /* Mobile Sidebar */
          .toggle-btn {
            background: #0072ff;
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
          }

          .toggle-btn:hover {
            transform: scale(1.1);
          }

          .mobile-icons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease;
          }

          .mobile-icons.show {
            max-height: 200px;
          }

          .social-mobile {
            background: #333;
            color: white;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .social-mobile:hover {
            transform: scale(1.2);
            box-shadow: 0 6px 15px rgba(0,0,0,0.25);
          }

          /* ✅ Mobile colors */
          .social-mobile.whatsapp { background: #25D366; }
          .social-mobile.facebook { background: #1877F2; }
          .social-mobile.linkedin { background: #0A66C2; }
        `}
      </style>
    </>
  );
}

export default SocialSidebar;
