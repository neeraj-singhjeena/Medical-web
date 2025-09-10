import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import images
import img1 from "../assets/images/OIP-removebg-preview.png";
import img2 from "../assets/images/medium-shot-woman-holding-tube.jpg";
import img3 from "../assets/images/2a125c7aa0d47538b857291fa0901286-removebg-preview.png";
import doctorImg from "../assets/images/doctor.png";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // ✅ Outer hexagon
  const hexStyleOuter = (rotate = 0) => ({
    clipPath:
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    width: "clamp(140px, 20vw, 200px)",
    height: "clamp(160px, 24vw, 220px)",
    background: "linear-gradient(135deg, #24B7D3, #30EFAD)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 18px rgba(0,0,0,0.2)",
    transition: "all 0.4s ease",
    cursor: "pointer",
    position: "relative",
    transform: `rotate(${rotate}deg)`,
  });

  // ✅ Inner hexagon (image inside)
  const hexStyleInner = (src, rotate = 0, isGirl = false) => ({
    clipPath:
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
    width: "85%",
    height: "85%",
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: isGirl ? "top center" : "center",
    transition: "all 0.4s ease",
    transform: `rotate(-${rotate}deg)`,
  });

  return (
    <section className="py-5" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* ✅ Left Side (Hexagon Images) */}
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex flex-wrap justify-content-center gap-4">
            {/* Top Left Hexagon */}
            <div
              style={hexStyleOuter(0)}
              data-aos="zoom-in"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-12px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0,0,0,0.3), 0 8px 20px rgba(36,183,211,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0deg)";
                e.currentTarget.style.boxShadow = "0 10px 18px rgba(0,0,0,0.2)";
              }}
            >
              <div style={hexStyleInner(img1, 0)}></div>
            </div>

            {/* Top Right Hexagon (girl image) */}
            <div
              style={hexStyleOuter(0)}
              data-aos="zoom-in"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-12px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0,0,0,0.3), 0 8px 20px rgba(36,183,211,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0deg)";
                e.currentTarget.style.boxShadow = "0 10px 18px rgba(0,0,0,0.2)";
              }}
            >
              <div style={hexStyleInner(img2, 0, true)}></div>
            </div>

            {/* Bottom Hexagon (rotated) */}
            <div
              style={hexStyleOuter(90)}
              data-aos="zoom-in"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "rotate(90deg) translateY(-12px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0,0,0,0.3), 0 8px 20px rgba(36,183,211,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(90deg)";
                e.currentTarget.style.boxShadow = "0 10px 18px rgba(0,0,0,0.2)";
              }}
            >
              <div style={hexStyleInner(img3, 90)}></div>
            </div>
          </div>

          {/* ✅ Right Side (Content) */}
          <div className="col-lg-6" data-aos="fade-left">
            <h6 className="fw-bold text-uppercase" style={{ color: "#2AD2C1" }}>
              About Us
            </h6>
            <h2 className="fw-bold mb-3">
              Experiment With The Best{" "}
              <span style={{ color: "#00FB8A" }}>Lab Test And Service</span>
            </h2>
            <p className="text-muted">
              With a belief that knowledge is power, we connect our patients
              directly with their results so they have valuable health
              information when they need it most.
            </p>

            {/* ✅ Service List */}
            <div className="row mt-3">
              {[
                "Toxicological assessment",
                "Basic Pathology Testing",
                "Diagnostic research Facility",
                "Biological evaluation",
              ].map((item, i) => (
                <div
                  key={i}
                  className="col-sm-6 mb-2 d-flex align-items-center"
                >
                  <span
                    style={{
                      color: "#00FB8A",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    ✓
                  </span>
                  <span className="text-muted">{item}</span>
                </div>
              ))}
            </div>

            {/* ✅ Doctor Info */}
            <div className="d-flex align-items-center mt-4">
              <img
                src={doctorImg}
                alt="Doctor"
                className="rounded-circle me-3"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
              <div>
                <h6 className="fw-bold mb-0">Dr. Abigail George</h6>
                <p className="text-muted small mb-0">Laboratory Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
