import React from "react";
import dataAnalysisImg from "../../../assets/images/medium-shot-woman-holding-tube.jpg";

function DataAnalysis() {
  return (
    <div className="dataanalysis-page">
      {/* ✅ Banner Section */}
      <div className="dataanalysis-banner">
        <img src={dataAnalysisImg} alt="Data Analysis Banner" />
        <div className="overlay">
          <h1>E. Machine Learning Applications</h1>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="container py-5">
        <section>
          <h2>E. Machine Learning Applications</h2>
          <p>
            Leveraging supervised and unsupervised learning models (clustering,
            classification, regression), we provide predictive insights and
            pattern recognition for research and industrial decision-making.
          </p>
        </section>

        {/* ✅ Industries Served */}
        <section className="industries py-4">
          <h2>Industries Served</h2>
          <p>
            Our data analysis services support Pharmaceuticals, Chemicals,
            Biotech, Materials Science, Energy, Environmental Research, Food &
            Agriculture, and Academic/Government R&D sectors.
          </p>
        </section>
      </div>

      {/* ✅ Styles */}
      <style>{`
        .dataanalysis-banner {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 300px;
          max-height: 500px;
          overflow: hidden;
        }
        .dataanalysis-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(70%);
        }
        .dataanalysis-banner .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 3rem;
          background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          text-align: center;
        }
        .dataanalysis-banner h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .dataanalysis-page section {
          margin-bottom: 2rem;
        }
        .dataanalysis-page h2 {
          color: #2AD2C1;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .dataanalysis-page p {
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
          .dataanalysis-banner {
            height: 50vh;
          }
          .dataanalysis-banner h1 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 576px) {
          .dataanalysis-banner {
            height: 40vh;
          }
          .dataanalysis-banner h1 {
            font-size: 1.8rem;
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default DataAnalysis;
