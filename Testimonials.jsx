// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Testimonials() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false });
//   }, []);

//   const testimonials = [
//     {
//       name: "Rohit Sharma",
//       role: "Data Scientist",
//       feedback:
//         "SpectraCore’s analytics solutions completely transformed how we work. Highly recommended!",
//     },
//     {
//       name: "Anita Verma",
//       role: "CTO, FoodTech",
//       feedback:
//         "Amazing AI services! They helped us automate our operations efficiently.",
//     },
//     {
//       name: "Vikram Malhotra",
//       role: "Construction Manager",
//       feedback:
//         "Their consulting team is very professional and delivered beyond expectations.",
//     },
//   ];

//   return (
//     <section className="py-5 bg-light" id="testimonials">
//       <div className="container text-center" data-aos="fade-up">
//         <h2 className="fw-bold mb-4" style={{ color: "#0072ff" }}>
//           What Our Clients Say
//         </h2>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           slidesPerView={1}
//         >
//           {testimonials.map((t, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="p-4 bg-white shadow rounded mx-auto"
//                 style={{ maxWidth: "600px" }}
//                 data-aos="zoom-in"
//               >
//                 <p className="text-muted fst-italic">"{t.feedback}"</p>
//                 <h6 className="mt-3 fw-bold">{t.name}</h6>
//                 <p className="text-primary small">{t.role}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "Data Scientist",
      feedback:
        "SpectraCore’s analytics solutions completely transformed how we work. Highly recommended!",
    },
    {
      name: "Anita Verma",
      role: "CTO, FoodTech",
      feedback:
        "Amazing AI services! They helped us automate our operations efficiently.",
    },
    {
      name: "Vikram Malhotra",
      role: "Construction Manager",
      feedback:
        "Their consulting team is very professional and delivered beyond expectations.",
    },
    {
      name: "Priya Singh",
      role: "Healthcare Analyst",
      feedback:
        "The best cloud integration experience. Very smooth and efficient!",
    },
    {
      name: "Arjun Patel",
      role: "Investor",
      feedback:
        "Transparency and professionalism are unmatched. Truly world-class!",
    },
    {
      name: "Sneha Kapoor",
      role: "AI Engineer",
      feedback: "The automation tools they built saved us months of work.",
    },
    {
      name: "Manish Yadav",
      role: "Government Officer",
      feedback: "Data-driven insights that really helped in policy planning.",
    },
    {
      name: "Kavita Rao",
      role: "CEO, AgriTech",
      feedback:
        "SpectraCore empowered our decision-making with real-time analytics.",
    },
    {
      name: "Ramesh Gupta",
      role: "Cloud Architect",
      feedback: "Amazing cloud migration support. Totally hassle-free!",
    },
    {
      name: "Divya Nair",
      role: "Consultant",
      feedback:
        "Their consulting services boosted our efficiency exponentially.",
    },
  ];

  return (
    <section className="py-5 bg-light" id="testimonials">
      <div className="container text-center" data-aos="fade-up">
        <h2 className="fw-bold mb-4" style={{ color: "#0072ff" }}>
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 }, // ✅ Mobile -> 1 testimonial
            768: { slidesPerView: 2 }, // ✅ Tablet/Desktop -> 2 testimonials
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className="p-4 bg-white shadow rounded mx-auto h-100"
                style={{ maxWidth: "500px" }}
                data-aos="zoom-in"
              >
                <p className="text-muted fst-italic">"{t.feedback}"</p>
                <h6 className="mt-3 fw-bold">{t.name}</h6>
                <p className="text-primary small">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Custom Pagination Styling */}
      <style>
        {`
          .swiper-pagination {
            position: relative !important;
            bottom: 0 !important;
            margin-top: 20px !important;
            text-align: center !important;
          }
          .swiper-pagination-bullet {
            background: #0072ff !important;
            opacity: 0.5;
            width: 12px;
            height: 12px;
            margin: 0 6px !important;
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            background: linear-gradient(45deg, #00c6ff, #0072ff) !important;
            transform: scale(1.3);
          }
        `}
      </style>
    </section>
  );
}

export default Testimonials;
