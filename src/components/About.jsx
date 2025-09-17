import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Import images
import img2 from "../assets/images/medium-shot-woman-holding-tube.jpg";
import doctorImg from "../assets/images/img.png";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // ✅ CSS Objects
  const styles = {
    section: {
      padding: "60px 20px",
      backgroundColor: "#fff",
      fontFamily: "Arial, sans-serif",
    },
    imgWrapper: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      marginRight: "30px", // ✅ gap between left & right
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
    },
    subtitle: {
      color: "#2AD2C1",
      fontWeight: "bold",
      textTransform: "uppercase",
      marginBottom: "10px",
    },
    title: {
      fontWeight: "700",
      marginBottom: "15px",
      lineHeight: "1.3",
    },
    highlight: {
      color: "#00FB8A",
    },
    text: {
      color: "#666",
      lineHeight: "1.6",
    },
    checkmark: {
      color: "#00FB8A",
      fontSize: "20px",
      marginRight: "8px",
    },
    serviceItem: {
      color: "#555",
    },
    doctorImg: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
    },
  };

  return (
    <section style={styles.section}>
      <div className="container">
        <div className="row align-items-center">
          {/* ✅ Left Side (Single Image) */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <div
              style={styles.imgWrapper}
              onMouseEnter={(e) =>
                (e.currentTarget.querySelector("img").style.transform =
                  "scale(1.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.querySelector("img").style.transform =
                  "scale(1)")
              }
            >
              <img src={img2} alt="Lab Professional" style={styles.image} />
            </div>
          </div>

          {/* ✅ Right Side (Content) */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            style={{ paddingLeft: "20px" }}
          >
            <h6 style={styles.subtitle}>About Us</h6>

            {/* 🔹 Updated Heading */}
            <h2 style={styles.title}>
              Trusted Partner In{" "}
              <span style={styles.highlight}>Testing, Research & Scale-Up</span>
            </h2>

            <p style={styles.text}>
              SpectraCore Analytics is committed to delivering world-class,
              end-to-end solutions in research consulting, analytical testing,
              computational modeling, and process scale-up to accelerate
              innovation from lab to plant.
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
                  <span style={styles.checkmark}>✓</span>
                  <span style={styles.serviceItem}>{item}</span>
                </div>
              ))}
            </div>

            {/* ✅ Doctor Info */}
            <div className="d-flex align-items-center mt-4">
              <img
                src={doctorImg}
                alt="Doctor"
                style={styles.doctorImg}
                className="me-3"
              />
              <div>
                <h6 className="fw-bold mb-0">Dr. Tanu Mittal</h6>
                <p className="text-muted small mb-0">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
