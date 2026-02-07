import React from "react";
import researchImg from "../../../assets/images/medium-shot-woman-holding-tube.jpg";

function Publication() {
  return (
    <div className="publication-page">
      {/* ✅ Banner Section */}
      <div className="publication-banner">
        <img src={researchImg} alt="Publication Banner" />
        <div className="overlay">
          <h1>Publication Support</h1>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="container py-5">
        <section>
          <h2>F. Scientific Writing & Publication Support</h2>
          <p>
            Our writing team supports manuscript preparation, thesis drafting,
            grant applications, and patent documents (non-legal) with expertise
            in scientific expression. Services extend to journal selection,
            formatting, producing publication-ready graphics and figures, and
            crafting impactful technical presentations and training materials to
            enhance scientific communication.
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
        .publication-banner {
          position: relative;
          width: 100%;
          height: 60vh;
          min-height: 300px;
          max-height: 500px;
          overflow: hidden;
        }
        .publication-banner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(65%);
        }
        .publication-banner .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center; /* ✅ vertically center */
          justify-content: center; /* ✅ horizontally center */
          padding: 0 1rem;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6));
          text-align: center;
        }
        .publication-banner h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.2;
        }
        .publication-page section {
          margin-bottom: 2rem;
        }
        .publication-page h2 {
          color: #2AD2C1;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .publication-page p {
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
          .publication-banner {
            height: 50vh;
          }
          .publication-banner h1 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 576px) {
          .publication-banner {
            height: 40vh;
          }
          .publication-banner h1 {
            font-size: 1.6rem;
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Publication;
