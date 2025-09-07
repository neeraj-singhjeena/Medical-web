import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Location() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // ✅ Get Directions button → Google Maps direct link
  const handleGetDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Hoshiarpur,+Punjab",
      "_blank"
    );
  };

  return (
    <section
      id="location"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Details */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h2 className="fw-bold mb-3" style={{ color: "#0072ff" }}>
              Our Location
            </h2>
            <p className="lead text-muted mb-4">
              At <strong>SpectraCore Analytics</strong>, we are committed to
              delivering world-class solutions in AI, Data Analytics, and Cloud.
              <br />
              <br />
              📍 <strong>Office Address:</strong> Punjab, Hoshiarpur, India
              <br />
              📧 <strong>Email:</strong> neeraj2005jeena@gmail.com
              <br />
              ☎️ <strong>Phone:</strong> +91 98765 43210
            </p>

            {/* ✅ Button */}
            <button
              onClick={handleGetDirections}
              className="btn px-4 py-2"
              style={{
                background: "linear-gradient(45deg, #00c6ff, #0072ff)",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "8px",
              }}
            >
              Get Directions
            </button>
          </div>

          {/* Right Side - Map */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe
                title="SpectraCore Analytics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.192233365219!2d75.9050!3d31.5372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af64b6a3a21b9%3A0x3d3c8b0f8c5af4cf!2sHoshiarpur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1694000000000"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
