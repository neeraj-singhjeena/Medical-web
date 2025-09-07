import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Responsibility() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      id="responsibility"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold" style={{ color: "#0072ff" }}>
            Corporate Responsibility
          </h2>
          <p className="text-muted">
            At <strong>SpectraCore Analytics</strong>, we are committed not just
            to innovation, but also to sustainability, ethics, and community
            development. We believe growth must go hand in hand with positive
            impact.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left Side - Overview */}
          <div
            className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start"
            data-aos="fade-right"
          >
            <h4 className="fw-bold" style={{ color: "#0072ff" }}>
              Our Commitment
            </h4>
            <p className="text-muted">
              As a global leader in AI and Data Analytics, we hold ourselves
              accountable for shaping a sustainable future. Our corporate
              responsibility initiatives focus on:
            </p>
            <ul className="text-muted list-unstyled">
              <li>🌱 Reducing environmental impact</li>
              <li>🤝 Building stronger communities</li>
              <li>⚖️ Ensuring ethical practices</li>
            </ul>
          </div>

          {/* Right Side - Responsibility Cards */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="row g-3">
              {[
                {
                  title: "🌱 Environment",
                  text: "We adopt green technologies to minimize carbon footprint.",
                },
                {
                  title: "🤝 Community",
                  text: "We empower local communities with skills and opportunities.",
                },
                {
                  title: "⚖️ Ethics",
                  text: "We uphold transparency, integrity, and fairness in all actions.",
                },
              ].map((item, i) => (
                <div className="col-12" key={i}>
                  <div className="p-4 bg-white shadow rounded text-center responsibility-card h-100">
                    <h5 style={{ color: "#0072ff" }}>{item.title}</h5>
                    <p className="text-muted small">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Styles */}
      <style>
        {`
          .responsibility-card {
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .responsibility-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 8px 20px rgba(0, 114, 255, 0.25);
          }

          /* ✅ Mobile Friendly */
          @media (max-width: 768px) {
            #responsibility h2 {
              font-size: 1.8rem;
            }
            #responsibility h4 {
              font-size: 1.3rem;
            }
            .responsibility-card {
              padding: 20px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Responsibility;
