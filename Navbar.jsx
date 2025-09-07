// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg sticky-top">
//       <div className="container-fluid">
//         {/* Brand */}
//         <a
//           className="navbar-brand fw-bold fs-4"
//           href="#"
//           style={{
//             background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           SpectraCore Analytics
//         </a>

//         {/* Mobile Toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible Menu */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {/* Industries Dropdown */}
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="industriesDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Industries
//               </a>
//               <ul className="dropdown-menu animate__animated animate__fadeInDown">
//                 <li>
//                   <a className="dropdown-item" href="#chemical">
//                     Chemical
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#construction">
//                     Construction & Engineering
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#food">
//                     Food & Healthcare
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#government">
//                     Government & Trade
//                   </a>
//                 </li>
//               </ul>
//             </li>

//             {/* Services Dropdown */}
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="servicesDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Services
//               </a>
//               <ul className="dropdown-menu animate__animated animate__fadeInDown">
//                 <li>
//                   <a className="dropdown-item" href="#data">
//                     Data Analytics
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#ai">
//                     AI & Machine Learning
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#cloud">
//                     Cloud Solutions
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#consulting">
//                     Consulting
//                   </a>
//                 </li>
//               </ul>
//             </li>

//             {/* Other Links */}
//             <li className="nav-item">
//               <a className="nav-link" href="#about">
//                 About Us
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#location">
//                 Location
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#responsibility">
//                 Responsibility
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#investors">
//                 Investors
//               </a>
//             </li>

//             {/* 👇 New Contact Link */}
//             <li className="nav-item">
//               <a className="nav-link" href="#contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

function Navbar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const sectionId = query.toLowerCase().replace(/\s+/g, "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      alert("⚠️ No matching section found!");
    }

    setQuery("");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg sticky-top">
      <div className="container-fluid">
        {/* Brand */}
        <a
          className="navbar-brand fw-bold fs-4"
          href="#"
          style={{
            background: "linear-gradient(45deg, #00c6ff, #0072ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SpectraCore Analytics
        </a>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-md-center">
            {/* Industries Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="industriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Industries
              </a>
              <ul className="dropdown-menu animate__animated animate__fadeInDown">
                <li>
                  <a className="dropdown-item" href="#chemical">
                    Chemical
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#construction">
                    Construction & Engineering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#food">
                    Food & Healthcare
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#government">
                    Government & Trade
                  </a>
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu animate__animated animate__fadeInDown">
                <li>
                  <a className="dropdown-item" href="#data">
                    Data Analytics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#ai">
                    AI & Machine Learning
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#cloud">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#consulting">
                    Consulting
                  </a>
                </li>
              </ul>
            </li>

            {/* Other Links */}
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#location">
                Location
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#responsibility">
                Responsibility
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#investors">
                Investors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

            {/* ✅ Search Bar (visible only on tablet & laptop) */}
            <li className="nav-item ms-md-3 d-none d-md-block">
              <form className="d-flex search-bar" onSubmit={handleSearch}>
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn search-btn ms-2" type="submit">
                  🔍
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ Styling */}
      <style>
        {`
          .search-bar {
            max-width: 220px;
          }
          .search-input {
            border-radius: 20px;
            padding: 6px 12px;
            border: 2px solid #0072ff;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            flex: 1;
          }
          .search-input:focus {
            outline: none;
            box-shadow: 0 0 10px rgba(0,114,255,0.3);
            border-color: #00c6ff;
          }
          .search-btn {
            border-radius: 50%;
            background: linear-gradient(45deg, #00c6ff, #0072ff);
            color: #fff;
            font-weight: bold;
            transition: all 0.3s ease;
            padding: 6px 10px;
            min-width: 38px;
            min-height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .search-btn:hover {
            background: linear-gradient(45deg, #0072ff, #00c6ff);
            transform: scale(1.1);
          }

          /* Mobile (<768px) पर search bar hide */
          @media (max-width: 767px) {
            .search-bar {
              display: none !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
