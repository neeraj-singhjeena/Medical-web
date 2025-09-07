import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Investors() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      id="investors"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="fw-bold" style={{ color: "#0072ff" }}>
            Investor Relations
          </h2>
          <p className="text-muted">
            At <strong>SpectraCore Analytics</strong>, we believe in building
            trust and transparency with our investors. Here are some key
            highlights of our growth and vision.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left side - Message */}
          <div
            className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start"
            data-aos="fade-right"
          >
            <h4 className="fw-bold" style={{ color: "#0072ff" }}>
              A Message to Our Investors
            </h4>
            <p className="text-muted">
              Our commitment to innovation in AI, Data Analytics, and Cloud
              ensures sustainable growth and long-term value creation. With
              strong financial performance and global expansion, we are shaping
              the future of intelligent business solutions.
            </p>
            <a
              href="https://drive.google.com/file/d/1UJVJYJvWDEMO-LINK-DEMO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-4 py-2 mt-3"
              style={{
                background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              📑 Download Investor Report
            </a>
          </div>

          {/* Right side - Investment Highlights */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="row g-3">
              {[
                {
                  title: "📈 Growth",
                  text: "35% YoY revenue growth driven by AI & Analytics solutions.",
                },
                {
                  title: "🌍 Global Reach",
                  text: "Serving clients across 15+ countries with innovative solutions.",
                },
                {
                  title: "🤝 Partnerships",
                  text: "Collaborating with Fortune 500 companies worldwide.",
                },
                {
                  title: "💡 Innovation",
                  text: "20+ Patents filed in AI & Cloud Computing technologies.",
                },
              ].map((item, i) => (
                <div className="col-12 col-md-6" key={i}>
                  <div className="p-4 bg-white shadow rounded text-center h-100 investor-card">
                    <h5 style={{ color: "#0072ff" }}>{item.title}</h5>
                    <p className="text-muted small">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Hover effects + Mobile tweaks */}
      <style>
        {`
          .investor-card {
            transition: all 0.3s ease;
            cursor: pointer;
          }
          .investor-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 8px 20px rgba(0, 114, 255, 0.2);
          }

          /* ✅ Mobile Friendly */
          @media (max-width: 768px) {
            #investors h2 {
              font-size: 1.8rem;
            }
            #investors h4 {
              font-size: 1.3rem;
            }
            .investor-card {
              padding: 20px;
            }
            .btn {
              width: 100%; /* Button full width on phone */
            }
          }
        `}
      </style>
    </section>
  );
}

export default Investors;
