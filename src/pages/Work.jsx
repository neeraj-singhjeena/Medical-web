import React from "react";

const Work = () => {
  return (
    <div className="container text-white py-5">
      <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="fw-bold display-4" style={{ color: "#2AD2C1" }}>
          Case Studies
        </h1>
        <p className="text-secondary mt-3">
          Advanced Engineering & Material Science Solutions
        </p>
      </div>

      <div
        className="case-card p-4 p-md-5 rounded-4 border border-secondary border-opacity-25 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(10px)",
        }}
        data-aos="fade-up"
      >
        <div className="row">
          {/* Header Info */}
          <div className="col-12 mb-4">
            <h2 className="fw-bold mb-3" style={{ color: "#00FB8A" }}>
              Case Study: Sodium-Ion Battery Anode Development
            </h2>
            <div className="row g-3">
              <div className="col-md-4">
                <small className="text-secondary d-block">Client</small>
                <p className="fw-bold">
                  Confidential (Energy Technology Company)
                </p>
              </div>
              <div className="col-md-4">
                <small className="text-secondary d-block">Program</small>
                <p className="fw-bold">
                  USABC Earth-Abundant EV Battery Initiative
                </p>
              </div>
              <div className="col-md-4">
                <small className="text-secondary d-block">Status</small>
                <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50">
                  Ongoing Engagement
                </span>
              </div>
            </div>
            <hr className="border-secondary opacity-25" />
          </div>

          {/* Left Column */}
          <div className="col-lg-7">
            <section className="mb-4">
              <h5 className="fw-bold text-info">Project Overview</h5>
              <p className="text-secondary small">
                This project focuses on the development of a cost-optimized
                hybrid hard carbon anode for sodium-ion batteries intended for
                electric vehicle applications. The engagement is centered on
                improving material performance while maintaining compatibility
                with scalable and cost-effective manufacturing processes.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold text-info">Objective</h5>
              <ul className="text-secondary small">
                <li>Enhance initial efficiency (ICE) of the anode material</li>
                <li>Reduce overall battery system cost</li>
                <li>Improve energy density and performance stability</li>
                <li>
                  Enable scalable, domestically viable material production
                </li>
              </ul>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold text-danger">Key Challenges</h5>
              <ul className="text-secondary small">
                <li>
                  Low initial efficiency in conventional hard carbon materials
                </li>
                <li>Increased system cost due to cathode oversizing</li>
                <li>Limitations in conductivity and electrode density</li>
                <li>Need for manufacturing scalability</li>
              </ul>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold text-info">Approach</h5>
              <p className="small text-secondary mb-2">
                A hybrid anode architecture was designed combining:
              </p>
              <ul className="text-secondary small">
                <li>Engineered biomass-derived hard carbon</li>
                <li>Controlled microstructure for improved sodium storage</li>
                <li>Conductive network integration for enhanced performance</li>
              </ul>
              <p className="small text-secondary fst-italic">
                The approach focuses on linking material design with
                system-level performance outcomes, particularly cost and
                efficiency.
              </p>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-lg-5">
            <div
              className="p-4 rounded-4"
              style={{
                background: "rgba(42, 210, 193, 0.05)",
                border: "1px solid rgba(42, 210, 193, 0.2)",
              }}
            >
              <h5 className="fw-bold mb-3" style={{ color: "#2AD2C1" }}>
                Target Outcomes (Projected)
              </h5>
              <div className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 py-2">
                <small>Initial Coulombic Efficiency</small>
                <span className="fw-bold text-info">≥ 90%</span>
              </div>
              <div className="d-flex justify-content-between border-bottom border-secondary border-opacity-25 py-2">
                <small>Energy Density</small>
                <span className="fw-bold text-info">175–180 Wh/kg</span>
              </div>

              <h5 className="fw-bold mt-4 mb-3" style={{ color: "#2AD2C1" }}>
                Validation Strategy
              </h5>
              <ul className="small text-secondary ps-3">
                <li>Laboratory-scale electrochemical testing</li>
                <li>Electrode performance optimization</li>
                <li>Multi-layer cell validation (in progress)</li>
                <li>Third-party testing (planned)</li>
              </ul>

              <h5 className="fw-bold mt-4 mb-3" style={{ color: "#2AD2C1" }}>
                Business Impact
              </h5>
              <ul className="small text-secondary ps-3">
                <li>Lower cost pathway for sodium-ion EV batteries</li>
                <li>Reduced dependence on critical imported materials</li>
                <li>Improved feasibility of large-scale deployment</li>
                <li>Strengthened domestic supply chain potential</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion Block */}
        <div className="mt-5 p-4 rounded-3 border border-secondary border-opacity-25 bg-dark">
          <h5 className="fw-bold">Conclusion</h5>
          <p className="small text-secondary mb-0">
            This engagement reflects our capability to work on advanced,
            system-driven engineering problems, delivering solutions that
            integrate materials science, performance optimization, and
            scalability for next-generation technologies.
          </p>
        </div>

        <div className="mt-3 text-center">
          <small className="text-muted italic" style={{ fontSize: "12px" }}>
            <strong>Confidentiality Note:</strong> Certain technical and
            commercial details have been generalized due to the ongoing nature
            of the project and confidentiality considerations.
          </small>
        </div>
      </div>

      <style>{`
        .case-card { transition: all 0.3s ease; }
        .case-card:hover { transform: translateY(-5px); border-color: rgba(42, 210, 193, 0.4) !important; }
        ul li { margin-bottom: 5px; }
      `}</style>
    </div>
  );
};

export default Work;
