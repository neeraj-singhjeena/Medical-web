import React, { useEffect } from "react";
import {
  FaMicroscope,
  FaVials,
  FaLaptopCode,
  FaIndustry,
  FaChartLine,
  FaFileAlt,
  FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Navigation ke liye
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 120, once: true });
  }, []);

  const services = [
    {
      icon: <FaMicroscope />,
      title: "Research & Consulting",
      desc: "Customized solutions for academic research and industrial R&D, including experimental design, methodology optimization, and execution.",
      link: "/services/research",
    },
    {
      icon: <FaVials />,
      title: "Analytical Testing & Method Development",
      desc: "Spectroscopy, chromatography, structural, and thermal studies with publication-ready reports validated through accredited partner labs.",
      link: "/services/testing",
    },
    {
      icon: <FaLaptopCode />,
      title: "Computational Chemistry & Modeling",
      desc: "Molecular simulations, quantum calculations, and predictive modeling for materials and processes.",
      link: "/services/computational",
    },
    {
      icon: <FaIndustry />,
      title: "Process & Scale-Up Solutions",
      desc: "Lab-to-plant process optimization, reactor design, safety studies, and pilot-scale validation.",
      link: "/services/process",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analysis & Visualization",
      desc: "Processing and interpretation of complex datasets with dashboards, graphs, and statistical insights.",
      link: "/services/data-analysis",
    },
    {
      icon: <FaFileAlt />,
      title: "Publication & Reporting Support",
      desc: "Manuscripts, patents, grant proposals, and conference materials with clear, accurate scientific writing.",
      link: "/services/publication",
    },
    {
      icon: <FaCogs />,
      title: "Extended Process & Scale-Up Solutions",
      desc: "End-to-end support for reactor design, process optimization, scale-up, and technology transfer — ensuring safe, efficient, and industry-ready solutions.",
      link: "/services/extended-process",
    },
  ];

  return (
    <section className="services-section py-5" id="service">
      <div className="container">
        {/* Heading */}
        <p className="text-center text-teal-500 fw-bold">
          From research consulting to process scale-up, SpectraCore Analytics
          delivers end-to-end support for academia and industry.
        </p>
        <h2 className="text-center fw-bold my-3">
          Our Amazing <span className="text-success">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="services-grid">
          {/* Left column */}
          <div className="services-col left">
            {services.slice(0, 3).map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="service-card white"
                data-aos="fade-right"
              >
                <div className="service-header">
                  <span className="icon">{service.icon}</span>
                  <h5>{service.title}</h5>
                </div>
                <p>{service.desc}</p>
              </Link>
            ))}
          </div>

          {/* Right column */}
          <div className="services-col right">
            {services.slice(3, 6).map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="service-card gradient"
                data-aos="fade-left"
              >
                <div className="service-header">
                  <span className="icon">{service.icon}</span>
                  <h5>{service.title}</h5>
                </div>
                <p>{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Centered 7th service */}
        <div className="service-bottom" data-aos="fade-up">
          <Link to={services[6].link} className="service-card white">
            <div className="service-header">
              <span className="icon">{services[6].icon}</span>
              <h5>{services[6].title}</h5>
            </div>
            <p>{services[6].desc}</p>
          </Link>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .services-grid {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          gap: 20px;
        }
        .services-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .service-card {
          display: block;
          text-decoration: none;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
        }
        .white {
          background: #fff;
          color: #000;
        }
        .gradient {
          background: linear-gradient(135deg, #00c6ff, #00ff9d);
          color: #fff;
        }
        .service-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .icon {
          font-size: 24px;
          color: #0bbba5;
        }
        .gradient .icon {
          color: #fff;
        }
        .service-bottom {
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }
        .service-bottom .service-card {
          max-width: 600px;
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default Services;
