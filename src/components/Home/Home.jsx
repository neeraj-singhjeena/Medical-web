// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// import bgImage from "../../assets/images/woman-biochemist-checking-manifestations-virus-working-computer-equipped-lab-late-night.jpg";

// function Home() {
//   const [typedText, setTypedText] = useState("");
//   const textArray = ["Innovating Chemistry with Data-Driven Precision"];
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   // ✅ Fixed Typewriter Effect
//   useEffect(() => {
//     if (charIndex < textArray[textIndex].length) {
//       const timeout = setTimeout(() => {
//         setTypedText(textArray[textIndex].substring(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
//       }, 100);
//       return () => clearTimeout(timeout);
//     } else {
//       const timeout = setTimeout(() => {
//         setCharIndex(0);
//         setTextIndex((prev) => (prev + 1) % textArray.length);
//         setTypedText("");
//       }, 2000);
//       return () => clearTimeout(timeout);
//     }
//   }, [charIndex, textIndex]);

//   return (
//     <section
//       id="home"
//       style={{
//         minHeight: "100vh",
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//         color: "#fff",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "rgba(0,0,0,0.55)",
//           zIndex: 1,
//         }}
//       ></div>

//       {/* Content */}
//       <div
//         className="container"
//         style={{
//           position: "relative",
//           zIndex: 2,
//           width: "100%",
//         }}
//       >
//         <div className="row w-100" style={{ minHeight: "85vh" }}>
//           {/* Text Left Side */}
//           <div className="col-lg-7 d-flex flex-column justify-content-center text-start">
//             {/* Typewriter Heading */}
//             <h1 className="hero-heading mb-3">
//               {typedText}
//               <span className="cursor">|</span>
//             </h1>

//             {/* Subtitle */}
//             <p
//               className="mt-2"
//               style={{
//                 fontSize: "1.1rem",
//                 maxWidth: "550px",
//               }}
//             >
//               From research to scale-up, <b>SpectraCore Analytics</b> delivers
//               insightful chemistry, actionable data, and sustainable process
//               solutions.
//             </p>

//             {/* Buttons */}
//             <div className="mt-4">
//               <button
//                 className="btn get-started-btn me-3"
//                 onClick={() =>
//                   document.getElementById("services").scrollIntoView({
//                     behavior: "smooth",
//                   })
//                 }
//               >
//                 Get Started
//               </button>
//               <button
//                 className="btn explore-btn"
//                 onClick={() =>
//                   document.getElementById("about").scrollIntoView({
//                     behavior: "smooth",
//                   })
//                 }
//               >
//                 Explore Our Services
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Down Indicator */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20px",
//           left: "30px",
//           textAlign: "left",
//           zIndex: 2,
//         }}
//       >
//         <a
//           href="#services"
//           style={{
//             color: "#fff",
//             textDecoration: "none",
//             fontSize: "0.9rem",
//           }}
//         >
//           ↓ Scroll to our site
//         </a>
//       </div>

//       {/* CSS */}
//       <style>
//         {`
//           .hero-heading {
//             font-weight: 700;
//             font-size: 2.3rem;
//             line-height: 1.2;
//           }

//           @media (min-width: 768px) {
//             .hero-heading {
//               font-size: 3rem;
//             }
//           }

//           @media (min-width: 1200px) {
//             .hero-heading {
//               font-size: 4rem;
//             }
//           }

//           .cursor {
//             display: inline-block;
//             animation: blink 1s infinite;
//           }

//           @keyframes blink {
//             0% { opacity: 1; }
//             50% { opacity: 0; }
//             100% { opacity: 1; }
//           }

//           .get-started-btn {
//             background: #007bff;
//             color: #fff;
//             font-weight: 600;
//             padding: 10px 24px;
//             border-radius: 50px;
//             border: none;
//             transition: all 0.3s ease;
//           }
//           .get-started-btn:hover {
//             background: #0056b3;
//             transform: translateY(-2px);
//           }

//           .explore-btn {
//             background: transparent;
//             color: #fff;
//             font-weight: 600;
//             padding: 10px 24px;
//             border-radius: 50px;
//             border: 2px solid #fff;
//             transition: all 0.3s ease;
//           }
//           .explore-btn:hover {
//             background: #fff;
//             color: #0b1b36;
//             transform: translateY(-2px);
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import bgImage from "../../assets/images/woman-biochemist-checking-manifestations-virus-working-computer-equipped-lab-late-night.jpg";

function Home() {
  const [typedText, setTypedText] = useState("");
  const textArray = ["Innovating Chemistry with Data-Driven Precision"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // ✅ Typewriter Effect
  useEffect(() => {
    if (charIndex < textArray[textIndex].length) {
      const timeout = setTimeout(() => {
        setTypedText(textArray[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % textArray.length);
        setTypedText("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      ></div>

      {/* ✅ Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
        }}
      >
        <div className="row w-100" style={{ minHeight: "85vh" }}>
          <div className="col-lg-7 d-flex flex-column justify-content-center text-start">
            {/* Typewriter Heading */}
            <h1 className="hero-heading mb-3 text-white">
              {typedText}
              <span className="cursor">|</span>
            </h1>

            {/* Subtitle */}
            <p
              className="mt-2 text-white"
              style={{
                fontSize: "1.1rem",
                maxWidth: "550px",
              }}
            >
              From research to scale-up,{" "}
              <b style={{ color: "#2AD2C1" }}>SpectraCore Analytics</b> delivers
              insightful chemistry, actionable data, and sustainable process
              solutions.
            </p>

            {/* Buttons */}
            <div className="mt-4">
              <button
                className="btn get-started-btn me-3"
                onClick={() =>
                  document.getElementById("services").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Get Started
              </button>
              <button
                className="btn explore-btn"
                onClick={() =>
                  document.getElementById("about").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "30px",
          textAlign: "left",
          zIndex: 5,
        }}
      >
        <a
          href="#services"
          style={{
            color: "#00FB8A", // ✅ Accent Green
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          ↓ Scroll to our site
        </a>
      </div>

      {/* CSS */}
      <style>
        {`
          .hero-heading {
            font-weight: 700;
            font-size: 2.3rem;
            line-height: 1.2;
          }

          @media (min-width: 768px) {
            .hero-heading {
              font-size: 3rem;
            }
          }

          @media (min-width: 1200px) {
            .hero-heading {
              font-size: 4rem;
            }
          }

          .cursor {
            display: inline-block;
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }

          /* ✅ Get Started Button (Gradient) */
          .get-started-btn {
            background: linear-gradient(45deg, #24B7D3, #30EFAD);
            color: #fff;
            font-weight: 600;
            padding: 10px 24px;
            border-radius: 50px;
            border: none;
            transition: all 0.3s ease;
          }
          .get-started-btn:hover {
            background: #00FB8A; /* Accent Green */
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }

          /* ✅ Explore Button (Teal Outline) */
          .explore-btn {
            background: transparent;
            color: #2AD2C1; /* Teal */
            font-weight: 600;
            padding: 10px 24px;
            border-radius: 50px;
            border: 2px solid #2AD2C1;
            transition: all 0.3s ease;
          }
          .explore-btn:hover {
            background: #2AD2C1;
            color: #0b1b36;
            transform: translateY(-2px);
          }
        `}
      </style>
    </section>
  );
}

export default Home;
