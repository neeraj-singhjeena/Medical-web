import React, { useEffect } from "react";
import {
  FaMicroscope,
  FaFlask,
  FaLaptopCode,
  FaIndustry,
  FaChartLine,
  FaFileAlt
} from "react-icons/fa";
import doctorImg from "../../assets/images/doctor.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 150,
      once: true,
    });
  }, []);

  return (
    <section className="services-section py-5">
      <div className="container">
        {/* ✅ Heading */}
        <h6
          className="text-center fw-bold"
          data-aos="fade-up"
          style={{ color: "#2AD2C1" }}
        >
          Promising Best Quality Services
        </h6>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
          Our Amazing <span style={{ color: "#00FB8A" }}>Services</span>
        </h2>

        {/* ✅ Main Card */}
        <div
          className="services-card position-relative d-flex align-items-center justify-content-between px-5 py-4"
          data-aos="zoom-in"
        >
          {/* Left services */}
          <div className="service-list left-services">
            <div
              className="service-item d-flex align-items-center mb-4"
              data-aos="fade-right"
            >
              <div className="icon-box me-3">
                <FaMicroscope />
              </div>
              <div>
                <h5 className="fw-bold">Research & Consulting</h5>
                <p>
                  Customized solutions for academic research and industrial R&D, 
                  including experimental design and methodology optimization.
                </p>
              </div>
            </div>
            <div
              className="service-item d-flex align-items-center mb-4"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="icon-box me-3">
                <FaFlask />
              </div>
              <div>
                <h5 className="fw-bold">Analytical Testing</h5>
                <p>
                  Spectroscopy, chromatography, structural, and thermal studies 
                  with publication-ready reports.
                </p>
              </div>
            </div>
            <div
              className="service-item d-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="icon-box me-3">
                <FaLaptopCode />
              </div>
              <div>
                <h5 className="fw-bold">Computational Chemistry</h5>
                <p>
                  Molecular simulations, quantum calculations, and predictive 
                  modeling for materials and processes.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Doctor Image in Center */}
          <div
            className="doctor-wrapper position-absolute top-50 start-50 translate-middle"
            data-aos="zoom-in-up"
          >
            <img src={doctorImg} alt="Doctor" className="doctor-img" />
          </div>

          {/* Right services */}
          <div className="service-list text-end right-services">
            <div
              className="service-item d-flex align-items-center mb-4 justify-content-end"
              data-aos="fade-left"
            >
              <div>
                <h5 className="fw-bold">Process Scale-Up</h5>
                <p>
                  Lab-to-plant process optimization, reactor design, safety studies, 
                  and pilot-scale validation.
                </p>
              </div>
              <div className="icon-box ms-3">
                <FaIndustry />
              </div>
            </div>
            <div
              className="service-item d-flex align-items-center mb-4 justify-content-end"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div>
                <h5 className="fw-bold">Data Analysis</h5>
                <p>
                  Processing and interpretation of complex datasets with dashboards, 
                  graphs, and statistical insights.
                </p>
              </div>
              <div className="icon-box ms-3">
                <FaChartLine />
              </div>
            </div>
            <div
              className="service-item d-flex align-items-center justify-content-end"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div>
                <h5 className="fw-bold">Publication Support</h5>
                <p>
                  Manuscripts, patents, grant proposals, and conference materials 
                  with clear, accurate scientific writing.
                </p>
              </div>
              <div className="icon-box ms-3">
                <FaFileAlt />
              </div>
            </div>
          </div>
        </div>

      {/* Styles */}
      <style>
        {`
          .services-card {
            background: linear-gradient(135deg, #0072ff, #00c6ff);
            border-radius: 20px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            color: #fff;
            overflow: hidden;
            padding: 75px 50px 45px 50px; 
          }
          .service-item h5 {
            margin: 0;
            color: #fff;
          }
          .service-item p {
            margin: 0;
            font-size: 14px;
            color: #f0f0f0;
            max-width: 240px;
          }
          .icon-box {
            width: 55px;
            height: 55px;
            border-radius: 12px;
            background: rgba(255,255,255,0.15);
            color: #fff;
            font-size: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }
          .icon-box:hover {
            transform: scale(1.1);
          }

            .doctor-wrapper { z-index: 10; }
            .doctor-img { max-height: 450px; object-fit: contain; }

          /* ✅ Responsive Fix */
          @media (max-width: 991px) {
            .services-card {
              flex-direction: column !important;
              text-align: center;
              padding: 40px 20px;
            }
            .service-list {
              width: 100%;
              text-align: center !important;
            }
          }

          /* ✅ Hide Doctor Image and stack icons/text on Mobile */
          @media (max-width: 768px) {
            .doctor-wrapper {
              display: none !important;
            }
            .service-item {
              flex-direction: column !important;
              justify-content: center !important;
              align-items: center !important;
              text-align: center !important;
              margin-bottom: 25px;
            }
            .service-item .icon-box {
              margin-bottom: 12px;
            }
            .service-item p {
              max-width: 100% !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;