import React from "react";
import researchImg from "../../../assets/images/medium-shot-woman-holding-tube.jpg";

function Testing() {
  return (
    <div className="testing-page">
      {/* ✅ Banner Section */}
      <div className="testing-banner">
        <img src={researchImg} alt="Testing Banner" />
        <div className="overlay">
          <h1>Analytical Testing & Method Development</h1>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="container py-5">
        <section>
          <h2>B. Analytical Testing & Method Development</h2>
          <p>
            Our analytical testing capabilities include a broad range of
            spectroscopic, chromatographic, elemental, diffraction, and thermal
            techniques performed in-house and via NABL-accredited partner
            laboratories. We develop and validate methods following ICH and ISO
            guidelines, ensuring accuracy, reproducibility, and compliance. Our
            services span UV-Vis, FT-IR, Raman, NMR, GC, HPLC, LC-MS/MS, XRF,
            ICP, XRD, SEM, TEM, TGA, DSC, rheology, and physical property
            testing such as pH and conductivity, supporting diverse industry
            applications.
          </p>
        </section>

        {/* ✅ Industries Served */}
        <section className="industries py-4">
          <h2>Industries Served</h2>
          <p>
            Our services cater to Chemicals & Specialty Chemicals, Polymers,
            Paints & Coatings, Pharmaceuticals & Biotech, Energy & Environment
            sectors including battery materials and water treatment, Food &
            Agriculture, and Academic & Government research labs requiring
            project support, advanced analysis, and publication assistance.
          </p>
        </section>
      </div>

      {/* ✅ Styles */}
      <style>{`
        .testing-banner {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 300px;
          max-height: 500px;
          overflow: hidden;
        }
        .testing-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(65%);
        }
        .testing-banner .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center; /* ✅ center vertically */
          justify-content: center; /* ✅ center horizontally */
          padding: 0 1rem;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6));
          text-align: center;
        }
        .testing-banner h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }
        .testing-page section {
          margin-bottom: 2rem;
        }
        .testing-page h2 {
          color: #2AD2C1;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .testing-page p {
          line-height: 1.7;
          font-size: 1rem;
          color: #444;
        }
        .industries {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
          

        /* ✅ Responsive */
        @media (max-width: 992px) {
          .testing-banner {
            height: 50vh;
          }
          .testing-banner h1 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 576px) {
          .testing-banner {
            height: 40vh;
          }
          .testing-banner h1 {
            font-size: 1.6rem;
            padding: 0 0.5rem;
          }
        }
          
      `}</style>
    </div>
  );
}

export default Testing;
