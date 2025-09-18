import React, { useEffect, useState } from "react";
import Assistant from "./components/Assistant/Assistant";
import Navbar from "./components/Navbar";

// Sections
import Home from "./components/Home/Home";
import Services from "./components/services/Services";
import About from "./components/About";
import Location from "./components/Location";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials";
// Sidebar & Footer
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer/Footer";

// Animations
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { FaArrowUp } from "react-icons/fa";

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Services detail pages
import Research from "./components/services/pages/Research";
import Computational from "./components/services/pages/Computational";
import Testing from "./components/services/pages/Testing";
import DataAnalysis from "./components/services/pages/DataAnalysis";
import Publication from "./components/services/pages/Publication";
import Process from "./components/services/pages/Process";
import ExtendedProcess from "./components/services/pages/ExtendedProcess";

// ✅ Hook for scrolling to hash
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return null;
}

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
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
    <Router>
      {/* ✅ Scroll Hook */}
      <ScrollToHash />

      {/* ✅ AI Assistant */}
      <Assistant />

      {/* ✅ Navbar */}
      <Navbar />

      <Routes>
        {/* ✅ Home page */}
        <Route
          path="/"
          element={
            <>
              <main>
                <section id="home" data-aos="fade-up">
                  <Home />
                </section>
                <section id="about" data-aos="fade-right">
                  <About />
                </section>
                <section id="about" data-aos="fade-right">
                  <Testimonials />
                </section>
                <section id="services" data-aos="fade-left">
                  <Services />
                </section>
                <section id="contact" data-aos="fade-right">
                  <Contact />
                </section>
                <section id="location" data-aos="fade-left">
                  <Location />
                </section>
              </main>

              {/* ✅ Sidebar & Footer */}
              <SocialSidebar />
              <Footer />
            </>
          }
        />

        {/* ✅ Services detail pages with padding fix */}
        <Route
          path="/services/research"
          element={
            <div className="page-wrapper">
              <Research />
              <Footer />
            </div>
          }
        />
        <Route
          path="/services/computational"
          element={
            <div className="page-wrapper">
              <Computational />
              <Footer />
            </div>
          }
        />
        <Route
          path="/services/testing"
          element={
            <div className="page-wrapper">
              <Testing />
              <Footer />
            </div>
          }
        />
        <Route
          path="/services/data-analysis"
          element={
            <div className="page-wrapper">
              <DataAnalysis />
              <Footer />
            </div>
          }
        />
        <Route
          path="/services/publication"
          element={
            <div className="page-wrapper">
              <Publication />
              <Footer />
            </div>
          }
        />
        <Route
          path="/services/process"
          element={
            <div className="page-wrapper">
              <Process />
              <Footer />
            </div>
          }
        />
        <Route
          path="/services/extended-process"
          element={
            <div className="page-wrapper">
              <ExtendedProcess />
              <Footer />
            </div>
          }
        />
      </Routes>

      {/* ✅ Scroll-to-Top Button */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop} data-aos="zoom-in">
          <FaArrowUp />
        </div>
      )}

      <style>{`
        /* ✅ Global Fix */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          width: 100%;
          overflow-x: hidden; /* 🔥 Side space hata dega */
        }
        main, section, .page-wrapper {
          max-width: 100%;
          overflow-x: hidden;
        }

        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #2AD2C1;
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
          background: linear-gradient(135deg, #24B7D3, #30EFAD);
          transform: scale(1.1) rotate(5deg);
        }

        /* ✅ Services pages padding fix */
        .page-wrapper {
          padding-top: 100px; /* Navbar height ke hisaab se adjust karo */
        }

        /* ✅ AOS side overflow fix */
        [data-aos="fade-left"],
        [data-aos="fade-right"] {
          overflow-x: hidden;
        }
      `}</style>
    </Router>
  );
}

export default App;
