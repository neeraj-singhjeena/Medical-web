// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Services() {
//   const [showMore, setShowMore] = useState(false);
//   const [expanded, setExpanded] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const toggleExpand = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   const services = [
//     {
//       id: 1,
//       title: "General Diagnostic Testing",
//       desc: "We are a leading diagnostic service provider.",
//       more: "Detailed insights about General Diagnostic Testing and its benefits for patients.",
//       icon: "🧪",
//     },
//     {
//       id: 2,
//       title: "Allergy & Sensitivity Testing",
//       desc: "Providing hassle-free allergy testing services.",
//       more: "Learn more about allergy triggers and personalized solutions.",
//       icon: "🌿",
//     },
//     {
//       id: 3,
//       title: "Clinical Histopathology Tests",
//       desc: "Equipped with world-class machinery.",
//       more: "Advanced histopathology tests to detect diseases at cellular level.",
//       icon: "🔬",
//     },
//     {
//       id: 4,
//       title: "Hormone Insights Testing",
//       desc: "Comprehensive hormone diagnostics.",
//       more: "Get deeper analysis into hormonal health with advanced tools.",
//       icon: "💊",
//     },
//     {
//       id: 5,
//       title: "Clinical Microbiology Tests",
//       desc: "Full-service Clinical Lab.",
//       more: "Identify bacteria, fungi, and viruses with accurate reports.",
//       icon: "🦠",
//     },
//     {
//       id: 6,
//       title: "Specialized Genetic Testing",
//       desc: "Expert genetic screening.",
//       more: "Personalized genetic testing for inherited conditions.",
//       icon: "🧬",
//     },
//     {
//       id: 7,
//       title: "Cardiac Health Screening",
//       desc: "Heart-focused early detection.",
//       more: "Detect heart disease risks with advanced screenings.",
//       icon: "❤️",
//     },
//     {
//       id: 8,
//       title: "Cancer Marker Testing",
//       desc: "Advanced tumor and cancer tests.",
//       more: "Accurate tumor marker detection for early diagnosis.",
//       icon: "🎯",
//     },
//     {
//       id: 9,
//       title: "Prenatal & Fertility Tests",
//       desc: "Supporting families with fertility insights.",
//       more: "Comprehensive prenatal care with advanced diagnostics.",
//       icon: "👶",
//     },
//     {
//       id: 10,
//       title: "Immunology & Infection Tests",
//       desc: "Strong immunity & infection diagnostics.",
//       more: "Full range of immunology tests for infection detection.",
//       icon: "🛡️",
//     },
//   ];

//   const visibleServices = showMore ? services : services.slice(0, 6);

//   return (
//     <section id="services" className="py-5 bg-light">
//       <div className="container text-center">
//         {/* Heading */}
//         <p className="text-primary fw-bold">Promising Best Quality Services</p>
//         <h2 className="fw-bold mb-4">Our Amazing Services</h2>

//         {/* Service Cards */}
//         <div className="row g-4">
//           {visibleServices.map((service, index) => (
//             <div
//               key={service.id}
//               className="col-md-6 col-lg-4"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <div className="card shadow-sm h-100 border-0 rounded-4 service-card">
//                 <div className="card-body text-center">
//                   {/* Icon */}
//                   <div
//                     className="mb-3 fs-1"
//                     style={{
//                       background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     {service.icon}
//                   </div>

//                   {/* Title */}
//                   <h5 className="fw-bold">{service.title}</h5>
//                   <p className="text-muted small">{service.desc}</p>

//                   {/* Learn More Button */}
//                   <button
//                     className="btn btn-sm mt-2 px-3"
//                     style={{
//                       background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//                       color: "#fff",
//                       borderRadius: "20px",
//                     }}
//                     onClick={() => toggleExpand(service.id)}
//                   >
//                     {expanded === service.id ? "Hide Info ▲" : "Learn More ▼"}
//                   </button>

//                   {/* Extra Info */}
//                   <div
//                     className={`extra-info mt-3 text-muted small animate__animated ${
//                       expanded === service.id ? "animate__fadeInDown" : "d-none"
//                     }`}
//                   >
//                     {service.more}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Show More / Less Button */}
//         <button
//           onClick={() => setShowMore(!showMore)}
//           className="btn btn-lg mt-5 px-4"
//           style={{
//             background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//             color: "#fff",
//             fontWeight: "bold",
//             borderRadius: "30px",
//           }}
//         >
//           {showMore ? "Show Less ▲" : "Show More ▼"}
//         </button>
//       </div>

//       {/* Hover Effects */}
//       <style>
//         {`
//           .service-card {
//             transition: all 0.3s ease;
//           }
//           .service-card:hover {
//             transform: translateY(-10px) scale(1.03);
//             box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default Services;
import React from "react";
import {
  FaMicroscope,
  FaUserMd,
  FaCogs,
  FaStopwatch,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import doctorImg from "../../assets/images/doctor.png";

const Services = () => {
  return (
    <section className="services-section py-5">
      <div className="container">
        <h6 className="text-primary text-center fw-bold">
          Promising Best Quality Services
        </h6>
        <h2 className="text-center fw-bold mb-5">Our Amazing Services</h2>

        {/* Main card with blue background */}
        <div className="services-card position-relative d-flex align-items-center justify-content-between">
          {/* Left services */}
          <div className="service-list">
            <div className="service-item d-flex align-items-center mb-4">
              <div className="icon-box me-3">
                <FaMicroscope />
              </div>
              <div>
                <h5 className="fw-bold typewriter">Accurate Test Results</h5>
                <p>
                  Delivering precise, reliable results for confident
                  decision-making.
                </p>
              </div>
            </div>
            <div className="service-item d-flex align-items-center mb-4">
              <div className="icon-box me-3">
                <FaUserMd />
              </div>
              <div>
                <h5 className="fw-bold typewriter">Certified Lab Experts</h5>
                <p>
                  Delivering precise, reliable results for confident
                  decision-making.
                </p>
              </div>
            </div>
            <div className="service-item d-flex align-items-center">
              <div className="icon-box me-3">
                <FaCogs />
              </div>
              <div>
                <h5 className="fw-bold typewriter">Advanced Technology</h5>
                <p>
                  Delivering precise, reliable results for confident
                  decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="doctor-wrapper position-absolute top-50 start-50 translate-middle">
            <img src={doctorImg} alt="Doctor" className="doctor-img" />
          </div>

          {/* Right services */}
          <div className="service-list text-end">
            <div className="service-item d-flex align-items-center mb-4 justify-content-end">
              <div>
                <h5 className="fw-bold typewriter">Fast Turnaround Time</h5>
                <p>
                  Delivering precise, reliable results for confident
                  decision-making.
                </p>
              </div>
              <div className="icon-box ms-3">
                <FaStopwatch />
              </div>
            </div>
            <div className="service-item d-flex align-items-center mb-4 justify-content-end">
              <div>
                <h5 className="fw-bold typewriter">Reliable Data Analysis</h5>
                <p>
                  Delivering precise, reliable results for confident
                  decision-making.
                </p>
              </div>
              <div className="icon-box ms-3">
                <FaChartLine />
              </div>
            </div>
            <div className="service-item d-flex align-items-center justify-content-end">
              <div>
                <h5 className="fw-bold typewriter">Trusted By Professionals</h5>
                <p>
                  Delivering precise, reliable results for confident
                  decision-making.
                </p>
              </div>
              <div className="icon-box ms-3">
                <FaCheckCircle />
              </div>
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
            padding: 45px 40px 40px 40px; /* Top = 45px */
          }
          .service-item h5 {
            margin: 0;
            color: #fff;
          }
          .service-item p {
            margin: 0;
            font-size: 14px;
            color: #f0f0f0;
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
            animation: shake 0.4s;
            background: rgba(255,255,255,0.3);
          }
          @keyframes shake {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(2px, 2px) rotate(2deg); }
            50% { transform: translate(-2px, -1px) rotate(-2deg); }
            75% { transform: translate(2px, -2px) rotate(1deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
          .doctor-wrapper {
            z-index: 10;
          }
          .doctor-img {
            max-height: 420px;
            object-fit: contain;
          }

          /* Typewriter Animation */
          .typewriter {
            display: inline-block;
            overflow: hidden;
            border-right: 2px solid #fff;
            white-space: nowrap;
            animation: typing 3s steps(30, end), blink 0.8s step-end infinite;
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          @keyframes blink {
            50% { border-color: transparent }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
