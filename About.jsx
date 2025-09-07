import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* ✅ Left Side Content */}
          <div
            className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start"
            data-aos="fade-right"
          >
            <h2 className="fw-bold mb-3" style={{ color: "#0072ff" }}>
              About Us
            </h2>
            <p className="lead text-muted">
              At <strong>SpectraCore Analytics</strong>, we empower businesses
              through <span className="fw-bold">AI</span>,{" "}
              <span className="fw-bold">Cloud</span>, and{" "}
              <span className="fw-bold">Data Analytics</span>. Our mission is to
              deliver intelligent, scalable, and future-ready solutions.
            </p>

            {/* ✅ Learn More Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="btn px-4 py-2 mt-3"
              style={{
                background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "8px",
              }}
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>

            {/* ✅ Smooth Expandable Section */}
            <div
              ref={contentRef}
              className={`extra-content mt-3 ${showMore ? "show" : ""}`}
              style={{
                maxHeight: showMore
                  ? `${contentRef.current?.scrollHeight}px`
                  : "0px",
                opacity: showMore ? 1 : 0,
              }}
            >
              <p className="text-muted">
                We specialize in end-to-end digital transformation, delivering
                smart strategies for multiple industries including{" "}
                <strong>
                  Healthcare, Construction, FoodTech, and Government
                </strong>
                . Our vision is to redefine the future of decision-making using
                advanced AI-powered tools.
              </p>
            </div>
          </div>

          {/* ✅ Right Side Boxes */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="row g-3">
              {[
                { title: "AI Solutions", desc: "Cutting-edge ML & AI models." },
                { title: "Cloud Services", desc: "Secure and scalable cloud." },
                { title: "Analytics", desc: "Data-driven business insights." },
                { title: "Consulting", desc: "Expert guidance for growth." },
              ].map((item, i) => (
                <div key={i} className="col-6 col-md-6 col-sm-12">
                  <div className="p-4 bg-white shadow rounded h-100 text-center box-hover">
                    <h6 className="fw-bold" style={{ color: "#0072ff" }}>
                      {item.title}
                    </h6>
                    <p className="text-muted small">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CSS for Smooth Animation & Hover */}
      <style>
        {`
          .extra-content {
            overflow: hidden;
            transition: all 0.6s ease-in-out;
          }

          /* ✅ Hover effect only on devices that support hover */
          @media (hover: hover) and (pointer: fine) {
            .box-hover {
              transition: all 0.3s ease;
              cursor: pointer;
              border: 1px solid #eaeaea;
            }
            .box-hover:hover {
              transform: translateY(-8px);
              box-shadow: 0 8px 20px rgba(0, 114, 255, 0.3);
            }
          }

          /* ✅ Mobile Styling */
          @media (max-width: 768px) {
            .box-hover {
              padding: 20px;
              border: 1px solid #eaeaea;
            }
            h2 {
              text-align: center;
            }
          }
        `}
      </style>
    </section>
  );
}

export default About;
