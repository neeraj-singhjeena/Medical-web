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
      "https://www.google.com/maps/dir/?api=1&destination=H2,+Old+SBRA,+IIT+Kanpur,+208016",
      "_blank"
    );
  };

  return (
    <section
      id="location"
      className="py-5"
      style={{ backgroundColor: "#f2f4f8" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Details */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h2 className="fw-bold mb-3" style={{ color: "#2AD2C1" }}>
              Our Office
            </h2>
            <p className="lead text-muted mb-4">
              At <strong>SpectraCore Analytics</strong>, we deliver integrated
              R&D solutions—from analytical testing and computational chemistry
              to process scale-up and data intelligence—turning scientific
              innovation into commercial reality.
              <br />
              <br />
              📍 <strong>Office Address:</strong> H2, Old SBRA, Indian Institute
              of Technology, Kanpur 208016
              <br />
              📧 <strong>Email:</strong> info@spectracoreanalytics.in
              <br />
              ☎️ <strong>Phone:</strong> +91 9910127966
            </p>

            {/* ✅ Button */}
            <button
              onClick={handleGetDirections}
              className="btn px-4 py-2"
              style={{
                background: "linear-gradient(90deg, #24B7D3, #30EFAD)",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 12px rgba(36,183,211,0.3)",
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.542370977748!2d80.2310!3d26.5120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38d3c4b8f3a3%3A0x123456789abcdef!2sH2%2C+Old+SBRA%2C+IIT+Kanpur%2C+Kanpur+208016!5e0!3m2!1sen!2sin!4v1694000000000"
                style={{ border: 0, width: "100%", height: "100%" }}
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
