import React from "react";
import computationalImg from "../../../assets/images/medium-shot-woman-holding-tube.jpg";

function Computational() {
  return (
    <div className="computational-page">
      {/* ✅ Banner Section */}
      <div className="computational-banner">
        <img src={computationalImg} alt="Computational Chemistry Banner" />
        <div className="overlay">
          <h1>C. Computational Chemistry & Modeling</h1>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="container py-5">
        <section>
          <h2>C. Computational Chemistry & Modeling</h2>
          <p>
            Using advanced molecular modeling methods including quantum
            mechanics (QM), density functional theory (DFT), and molecular
            dynamics (MD), we simulate materials and small molecules to predict
            properties and optimize performance. We employ QSAR/QSPR,
            cheminformatics, and docking approaches for relevant biological or
            materials interactions. Process modeling covers kinetics, mass and
            heat transfer, and reaction engineering, supported by numerical
            analysis tools like Python, MATLAB, and COMSOL for comprehensive
            chemical process insights.
          </p>
        </section>

        {/* ✅ Industries Served */}
        <section className="industries py-4">
          <h2>Industries Served</h2>
          <p>
            Our computational services support Pharmaceuticals, Biotech,
            Chemicals, Polymers, Nanotechnology, Energy Materials, and Academic
            R&D — delivering predictive insights and reducing experimental
            costs.
          </p>
        </section>
      </div>

      {/* ✅ Styles */}
      <style>{`
        .computational-banner {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 300px;
          max-height: 500px;
          overflow: hidden;
        }
        .computational-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(70%);
        }
        .computational-banner .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 3rem;
          background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          text-align: center;
        }
        .computational-banner h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .computational-page section {
          margin-bottom: 2rem;
        }
        .computational-page h2 {
          color: #2AD2C1;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .computational-page p {
          line-height: 1.7;
          font-size: 1rem;
          color: #444;
        }
        .industries {
          background: #f9f9f9;
          padding: 2rem;
          border-radius: 8px;
        }

        /* ✅ Responsive */
        @media (max-width: 992px) {
          .computational-banner {
            height: 50vh;
          }
          .computational-banner h1 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 576px) {
          .computational-banner {
            height: 40vh;
          }
          .computational-banner h1 {
            font-size: 1.8rem;
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Computational;
