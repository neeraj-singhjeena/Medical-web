import React, { useEffect, useState } from "react";
import bgImage from "../../assets/images/woman-biochemist-checking-manifestations-virus-working-computer-equipped-lab-late-night.jpg";

function Home() {
  const [typedText, setTypedText] = useState("");
  const textArray = ["Innovating Chemistry with Data-Driven Precision"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter Effect
  useEffect(() => {
    if (charIndex < textArray[textIndex].length) {
      const timeout = setTimeout(() => {
        setTypedText(textArray[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % textArray.length);
        setTypedText("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <section id="home" className="home-section">
      <div className="overlay"></div>

      <div className="container home-container">
        <div className="row home-row align-items-center">
          <div className="col-lg-7 home-content">
            <h1 className="hero-heading mb-3 text-white">
              {typedText}
              <span className="cursor">|</span>
            </h1>

            <p className="hero-subtitle mt-2 text-white">
              From research to scale-up,{" "}
              <b style={{ color: "#2AD2C1" }}>SpectraCore Analytics</b> delivers
              insightful chemistry, actionable data, and sustainable process
              solutions.
            </p>

            <div className="mt-4 button-group">
              <button
                className="btn get-started-btn me-3"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Get Started
              </button>
              <button
                className="btn explore-btn"
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#services">↓ Scroll to our site</a>
      </div>

      <style>{`
        .home-section {
          min-height: 100vh;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          position: relative;
          color: #fff;
          display: flex;
          align-items: center;
          overflow-x: hidden;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 1;
        }
        .home-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 100%;
          padding: 0 15px;
          margin: 0 auto;
        }
        .home-row {
          min-height: 85vh;
          margin: 0;
          width: 100%;
        }
        .home-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          padding: 0 15px;
        }
        .hero-heading {
          font-weight: 700;
          font-size: 2.3rem;
          line-height: 1.2;
          margin: 0;
        }
        @media (min-width: 768px) { .hero-heading { font-size: 3rem; } }
        @media (min-width: 992px) { .hero-heading { font-size: 3.5rem; } }
        @media (min-width: 1200px) { .hero-heading { font-size: 4rem; } }
        .hero-subtitle {
          font-size: 1.1rem;
          max-width: 550px;
          margin: 0;
        }
        .cursor {
          display: inline-block;
          animation: blink 1s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
        .get-started-btn {
          background: linear-gradient(45deg, #24B7D3, #30EFAD);
          color: #fff;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 50px;
          border: none;
          transition: all 0.3s ease;
        }
        .get-started-btn:hover { background: #00FB8A; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
        .explore-btn {
          background: transparent;
          color: #2AD2C1;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 50px;
          border: 2px solid #2AD2C1;
          transition: all 0.3s ease;
        }
        .explore-btn:hover { background: #2AD2C1; color: #0b1b36; transform: translateY(-2px); }
        .scroll-indicator {
          position: absolute;
          bottom: 20px;
          left: 30px;
          z-index: 5;
        }
        .scroll-indicator a { color: #00FB8A; text-decoration: none; font-size: 0.9rem; }
        @media (max-width: 768px) {
          .home-content { text-align: center; align-items: center; }
          .hero-heading { font-size: 2rem; }
          .hero-subtitle { font-size: 1rem; text-align: center; }
          .button-group { flex-direction: column; gap: 12px; align-items: center; }
          .button-group .btn { width: 100%; max-width: 250px; margin: 0; }
          .scroll-indicator { left: 50%; transform: translateX(-50%); text-align: center; }
        }
        @media (max-width: 576px) {
          .hero-heading { font-size: 1.8rem; }
          .home-container { padding: 0 10px; }
        }
      `}</style>
    </section>
  );
}

export default Home;
