// import React, { useEffect, useState } from "react";
// import Assistant from "./components/Assistant/Assistant";
// import Navbar from "./components/Navbar";

// // Sections
// import Home from "./components/Home/Home";
// import Services from "./components/services/Services";
// import About from "./components/About";
// import Contact from "./components/Contact/Contact";

// // Sidebar & Footer
// import SocialSidebar from "./components/SocialSidebar";
// import Footer from "./components/Footer/Footer";

// // Animations
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Icons
// import { FaArrowUp } from "react-icons/fa";

// function App() {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       mirror: true,
//     });

//     // Assign fade-up to all text elements
//     const textElements = document.querySelectorAll(
//       "h1, h2, h3, h4, h5, h6, p, button, a"
//     );
//     textElements.forEach((el) => {
//       if (!el.hasAttribute("data-aos")) {
//         el.setAttribute("data-aos", "fade-up");
//       }
//     });

//     // Show/hide scroll button
//     const handleScroll = () => {
//       setShowScroll(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Smooth scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {/* ✅ AI Assistant */}
//       <Assistant />

//       {/* ✅ Navbar */}
//       <Navbar />

//       {/* ✅ Main Sections */}
//       <main>
//         <section id="home" className="full-height">
//           <Home />
//         </section>
//         <section id="about" className="normal-section">
//           <About />
//         </section>
//         <section id="services" className="normal-section">
//           <Services />
//         </section>

//         <section id="contact" className="normal-section">
//           <Contact />
//         </section>
//       </main>

//       {/* ✅ Sidebar & Footer */}
//       <SocialSidebar />
//       <Footer />

//       {/* ✅ Scroll-to-Top Button */}
//       <div
//         className={`scroll-to-top ${showScroll ? "show" : ""}`}
//         onClick={scrollToTop}
//       >
//         <FaArrowUp />
//       </div>

//       {/* ✅ CSS */}
//       <style>
//         {`
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//           }

//           body {
//             font-family: 'Arial', sans-serif;
//             line-height: 1.6;
//             color: #333;
//           }

//           /* ✅ Home Section full screen */
//           .full-height {
//             min-height: 100vh;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//           }

//           /* ✅ Other sections normal padding */
//           .normal-section {
//             padding: 80px 0;
//           }

//           .scroll-to-top {
//             position: fixed;
//             bottom: 25px;
//             right: 25px;
//             width: 50px;
//             height: 50px;
//             background: linear-gradient(45deg, #00c6ff, #0072ff);
//             color: #fff;
//             border-radius: 50%;
//             font-size: 20px;
//             cursor: pointer;
//             box-shadow: 0 4px 12px rgba(0,0,0,0.2);
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             transition: all 1s ease;
//             opacity: 0;
//             visibility: hidden;
//             z-index: 1000;
//           }

//           .scroll-to-top.show {
//             opacity: 1;
//             visibility: visible;
//           }

//           .scroll-to-top:hover {
//             transform: scale(1.15) rotate(360deg);
//             box-shadow: 0 8px 20px rgba(0,0,0,0.3);
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import Assistant from "./components/Assistant/Assistant";
import Navbar from "./components/Navbar";

// Sections
import Home from "./components/Home/Home";
import Services from "./components/services/Services";
import About from "./components/About";
import Location from "./components/Location";
import Faq from "./components/Faq";
// Sidebar & Footer
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer/Footer";

// Animations
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration
      easing: "ease-in-out",
      once: false, // 👈 baar-baar trigger hoga jab scroll karoge
    });

    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ✅ AI Assistant */}
      <Assistant />

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Sections */}
      <main>
        <section id="home" className="full-height" data-aos="fade-up">
          <Home />
        </section>
        <section id="about" className="normal-section" data-aos="fade-right">
          <About />
        </section>
        <section id="services" className="normal-section" data-aos="fade-left">
          <Services />
        </section>
        <section id="contact" className="normal-section" data-aos="fade-up">
          <Contact />
        </section>
        <section id="contact" className="normal-section" data-aos="fade-up">
          <Faq />
        </section>
        <section id="location" className="normal-section" data-aos="fade-right">
          <Location />
        </section>
      </main>

      {/* ✅ Sidebar & Footer */}
      <SocialSidebar />
      <Footer />

      {/* ✅ Scroll-to-Top Button */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop} data-aos="zoom-in">
          <FaArrowUp />
        </div>
      )}

      {/* ✅ Custom Styles */}
      <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #2AD2C1; /* Primary */
          color: #fff;
          border-radius: 50%;
          padding: 12px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          transition: transform 0.3s ease, background 0.3s ease;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .scroll-to-top:hover {
          background: linear-gradient(135deg, #24B7D3, #30EFAD); /* Gradient */
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </>
  );
}

export default App;
