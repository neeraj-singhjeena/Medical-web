// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [query, setQuery] = useState("");

//   // ✅ Scroll detection
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 80) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Search form submit
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     const sectionId = query.toLowerCase().replace(/\s+/g, "");
//     const section = document.getElementById(sectionId);

//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       alert("⚠️ No matching section found!");
//     }

//     setQuery("");
//   };

//   return (
//     <>
//       <nav
//         className={`navbar navbar-expand-md shadow-lg fixed-top ${
//           scrolled ? "navbar-colored" : "navbar-transparent"
//         }`}
//         style={{ padding: "0 40px" }} // 🔹 left-right 40px spacing
//       >
//         <div className="container-fluid d-flex align-items-center justify-content-between">
//           {/* ✅ Brand (left) */}
//           <a className="navbar-brand fw-bold fs-4" href="#">
//             SpectraCore Analytics
//           </a>

//           {/* ✅ Links (center) */}
//           <div
//             className="collapse navbar-collapse justify-content-center"
//             id="navbarNav"
//           >
//             <ul className="navbar-nav align-items-md-center text-uppercase fw-bold">
//               <li className="nav-item mx-2">
//                 <a className="nav-link" href="#home">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-link" href="#services">
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-link" href="#about">
//                   About Us
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-link" href="#contact">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* ✅ Search bar (right end) */}
//           <form
//             className="d-flex search-bar"
//             onSubmit={handleSearch}
//             style={{ maxWidth: "340px", width: "100%", marginLeft: "20px" }}
//           >
//             <input
//               type="text"
//               className="form-control search-input"
//               placeholder="Search..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             <button className="btn search-btn ms-2" type="submit">
//               🔍
//             </button>
//           </form>
//         </div>

//         {/* ✅ Styling */}
//         <style>
//           {`
//             .navbar-transparent {
//               background: rgba(0, 0, 0, 0.2);
//               backdrop-filter: blur(12px);
//               transition: background 0.6s ease, color 0.6s ease;
//             }
//             .navbar-transparent .nav-link,
//             .navbar-transparent .navbar-brand {
//               color: #fff !important;
//             }
//             .navbar-transparent .nav-link:hover {
//               color: #00c6ff !important;
//             }

//             .navbar-colored {
//               background: linear-gradient(45deg, #00c6ff, #0072ff);
//               transition: background 0.6s ease, color 0.6s ease;
//             }
//             .navbar-colored .nav-link,
//             .navbar-colored .navbar-brand {
//               color: #fff !important;
//             }
//             .navbar-colored .nav-link:hover {
//               color: #e0f7ff !important;
//             }

//             .search-bar {
//               max-width: 340px;
//               flex-grow: 1;
//             }
//             .search-input {
//               border-radius: 20px;
//               padding: 8px 14px;
//               border: 2px solid #0072ff;
//               transition: all 0.3s ease;
//               font-size: 0.95rem;
//               flex: 1;
//             }
//             .search-input:focus {
//               outline: none;
//               box-shadow: 0 0 10px rgba(0,114,255,0.3);
//               border-color: #00c6ff;
//             }
//             .search-btn {
//               border-radius: 50%;
//               background: linear-gradient(45deg, #00c6ff, #0072ff);
//               color: #fff;
//               font-weight: bold;
//               transition: all 0.3s ease;
//               padding: 6px 10px;
//               min-width: 38px;
//               min-height: 38px;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//             }
//             .search-btn:hover {
//               background: linear-gradient(45deg, #0072ff, #00c6ff);
//               transform: scale(1.1);
//             }
//           `}
//         </style>
//       </nav>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const closeBtn = document.querySelector("#mobileMenu .btn-close");
    if (closeBtn) closeBtn.click();
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-md fixed-top ${
          scrolled ? "navbar-colored shadow-sm" : "navbar-transparent"
        }`}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between px-3 px-md-4">
          {/* ✅ Brand Name */}
          <a className="navbar-brand fw-bold brand-text" href="#">
            <span className="brand-teal">Spectracore</span>{" "}
            <span className="brand-white">Analytics</span>
          </a>

          {/* ✅ Mobile toggle */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ✅ Desktop menu */}
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

          {/* ✅ Right side button (Desktop only) */}
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

      {/* ✅ Mobile Offcanvas */}
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
          {/* ✅ Mobile Button */}
          <button
            className="btn contact-btn w-100"
            data-bs-toggle="modal"
            data-bs-target="#appointmentModal"
          >
            Make Appointment
          </button>
        </div>
      </div>

      {/* ✅ Appointment Modal */}
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
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Service</label>
                  <select className="form-select">
                    <option>Select Service</option>
                    <option>Consultation</option>
                    <option>Data Analysis</option>
                    <option>Strategy Session</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Preferred Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Preferred Time</label>
                  <input type="time" className="form-control" />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Any additional details"
                  ></textarea>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn contact-btn">
                    Submit Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Styles */}
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

          /* ✅ Brand Colors */
          .brand-teal {
            color: #2AD2C1; /* Teal */
          }
          .brand-white {
            color: #fff;
          }

          .nav-link {
            font-size: 15px;
            font-weight: 500;
            color: #fff !important;
            padding: 8px 12px;
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: #00FB8A !important; /* Bright green accent */
          }

          /* ✅ Gradient Button */
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
            background: #00FB8A; /* Accent */
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          /* ✅ Modal Title */
          .modal-title-teal {
            color: #2AD2C1 !important;
          }

          /* ✅ Custom White Toggler */
          .custom-toggler {
            border: none;
          }
          .custom-toggler .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' 
            xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,1)' 
            stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' 
            d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
          }

          /* ✅ Accent text for offcanvas */
          .text-accent {
            color: #00FB8A !important;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
