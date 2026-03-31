// import React, { useEffect, useState } from "react";
// import Assistant from "./components/Assistant/Assistant";
// import Navbar from "./components/Navbar";

// // Sections
// import Home from "./components/Home/Home";
// import Services from "./components/services/Services";
// import About from "./components/About";
// import Location from "./components/Location";
// import Contact from "./components/Contact/Contact";
// import Reviews from "./components/Reviews/Reviews";
// import Testimonials from "./components/Testimonials";

// // Sidebar & Footer
// import SocialSidebar from "./components/SocialSidebar";
// import Footer from "./components/Footer/Footer";

// // Animations
// import AOS from "aos";
// import "aos/dist/aos.css";

// // Icons
// import { FaArrowUp } from "react-icons/fa";

// // Router
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";

// // Services detail pages
// import Research from "./components/services/pages/Research";
// import Computational from "./components/services/pages/Computational";
// import Testing from "./components/services/pages/Testing";
// import DataAnalysis from "./components/services/pages/DataAnalysis";
// import Publication from "./components/services/pages/Publication";
// import Process from "./components/services/pages/Process";
// import ExtendedProcess from "./components/services/pages/ExtendedProcess";

// function ScrollToHash() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace("#", "");
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   }, [location]);

//   return null;
// }

// function App() {
//   const [showScroll, setShowScroll] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: "ease-in-out",
//       once: false,
//     });

//     const handleScroll = () => setShowScroll(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <Router>
//       <ScrollToHash />

//       {/* Safe Assistant */}
//       {Assistant && <Assistant />}

//       <Navbar />

//       <Routes>
//         {/* ===== HOME PAGE ===== */}
//         <Route
//           path="/"
//           element={
//             <>
//               <main>
//                 <section id="home" data-aos="fade-up">
//                   <Home />
//                 </section>

//                 <section id="about" data-aos="fade-right">
//                   <About />
//                 </section>

//                 {/* ✅ FIXED ID */}
//                 <section id="testimonials" data-aos="fade-right">
//                   <Testimonials />
//                 </section>

//                 <section id="services" data-aos="fade-left">
//                   <Services />
//                 </section>

//                 <section id="contact" data-aos="fade-right">
//                   <Contact />
//                 </section>

//                 <section id="reviews" data-aos="fade-up">
//                   <Reviews />
//                 </section>

//                 <section id="location" data-aos="fade-left">
//                   <Location />
//                 </section>
//               </main>

//               <SocialSidebar />
//               <Footer />
//             </>
//           }
//         />

//         {/* ===== SERVICES PAGES ===== */}
//         <Route
//           path="/services/research"
//           element={
//             <div className="page-wrapper">
//               <Research />
//               <Footer />
//             </div>
//           }
//         />
//         <Route
//           path="/services/computational"
//           element={
//             <div className="page-wrapper">
//               <Computational />
//               <Footer />
//             </div>
//           }
//         />
//         <Route
//           path="/services/testing"
//           element={
//             <div className="page-wrapper">
//               <Testing />
//               <Footer />
//             </div>
//           }
//         />
//         <Route
//           path="/services/data-analysis"
//           element={
//             <div className="page-wrapper">
//               <DataAnalysis />
//               <Footer />
//             </div>
//           }
//         />
//         <Route
//           path="/services/publication"
//           element={
//             <div className="page-wrapper">
//               <Publication />
//               <Footer />
//             </div>
//           }
//         />
//         <Route
//           path="/services/process"
//           element={
//             <div className="page-wrapper">
//               <Process />
//               <Footer />
//             </div>
//           }
//         />
//         <Route
//           path="/services/extended-process"
//           element={
//             <div className="page-wrapper">
//               <ExtendedProcess />
//               <Footer />
//             </div>
//           }
//         />
//       </Routes>

//       {/* Scroll To Top */}
//       {showScroll && (
//         <div className="scroll-to-top" onClick={scrollToTop}>
//           <FaArrowUp />
//         </div>
//       )}

//       <style>{`
//         .scroll-to-top {
//           position: fixed;
//           bottom: 20px;
//           right: 20px;
//           background: #2AD2C1;
//           color: #fff;
//           border-radius: 50%;
//           padding: 12px;
//           cursor: pointer;
//           z-index: 999;
//         }
//         .page-wrapper {
//           padding-top: 100px;
//         }
//       `}</style>
//     </Router>
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
import Contact from "./components/Contact/Contact";
import Reviews from "./components/Reviews/Reviews";
import Testimonials from "./components/Testimonials";

// NEW PAGES (Inhe import kiya gaya hai)
import Work from "./pages/Work";
import Insights from "./pages/Insights";

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

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Naye page pe jaane par scroll hamesha top pe ho jaye
      window.scrollTo({ top: 0, behavior: "smooth" });
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

    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Router>
      <ScrollToHash />

      {/* Safe Assistant */}
      {Assistant && <Assistant />}

      <Navbar />

      <Routes>
        {/* ===== HOME PAGE ===== */}
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

                <section id="testimonials" data-aos="fade-right">
                  <Testimonials />
                </section>

                <section id="services" data-aos="fade-left">
                  <Services />
                </section>

                <section id="contact" data-aos="fade-right">
                  <Contact />
                </section>

                <section id="reviews" data-aos="fade-up">
                  <Reviews />
                </section>

                <section id="location" data-aos="fade-left">
                  <Location />
                </section>
              </main>

              <SocialSidebar />
              <Footer />
            </>
          }
        />

        {/* ===== NEW PAGES ROUTES ===== */}
        <Route
          path="/work"
          element={
            <div className="page-wrapper">
              <Work />
              <Footer />
            </div>
          }
        />
        <Route
          path="/insights"
          element={
            <div className="page-wrapper">
              <Insights />
              <Footer />
            </div>
          }
        />

        {/* ===== SERVICES PAGES ===== */}
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
              <div className="container">
                <DataAnalysis />
              </div>
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

      {/* Scroll To Top */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}

      <style>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #2AD2C1;
          color: #fff;
          border-radius: 50%;
          padding: 12px;
          cursor: pointer;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        .page-wrapper {
          padding-top: 100px; /* Navbar height compensation */
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Router>
  );
}

export default App;
