import React from "react";

const Insights = () => {
  return (
    <div className="container text-white py-5">
      <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="fw-bold display-4" style={{ color: "#2AD2C1" }}>
          Technical Insights
        </h1>
        <p className="text-secondary mt-3">
          Representative Technical Engagement & Advisory Reports (Redacted)
        </p>
      </div>

      <div className="row g-4">
        {/* Report 1: Materials Validation */}
        <div className="col-12" data-aos="fade-up">
          <div
            className="report-box p-4 p-md-5 rounded-4 border border-secondary border-opacity-25"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="row">
              <div className="col-lg-8">
                <h4 className="fw-bold" style={{ color: "#00FB8A" }}>
                  Materials Validation & Chemical Resistance Review
                </h4>
                <p className="text-info small mb-4">
                  Structured Technical Strategy for Advanced Materials
                  Innovation
                </p>

                <h6 className="fw-bold text-uppercase small text-secondary border-bottom border-secondary pb-2">
                  Overview
                </h6>
                <p className="small text-secondary mb-4">
                  SpectraCore Analytics conducted an independent technical
                  review of third-party laboratory testing for a polymer-based
                  sheet/laminate material undergoing qualification assessment.
                  The engagement focused on evaluating chemical resistance
                  performance, interpreting ISO 2812-1 test methodology, and
                  identifying validation gaps relevant to production-stage
                  deployment.
                </p>

                <h6 className="fw-bold text-uppercase small text-secondary border-bottom border-secondary pb-2">
                  Scope of Advisory
                </h6>
                <ul className="small text-secondary columns-2 mt-2">
                  <li>Coordination of accredited laboratory testing</li>
                  <li>Review of sample parameters & traceability</li>
                  <li>Interpretation of ISO 2812-1 methodology</li>
                  <li>Assessment of qualitative appearance evaluation</li>
                  <li>Structured technical reporting & risk analysis</li>
                </ul>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="p-3 rounded-3 bg-danger bg-opacity-10 border border-danger border-opacity-25 mb-3">
                  <h6 className="fw-bold text-danger small text-uppercase">
                    Engineering Risk Review
                  </h6>
                  <ul className="list-unstyled small text-secondary mb-0">
                    <li>
                      • Short-duration exposure limits long-term durability
                      inference
                    </li>
                    <li>
                      • Appearance-based inspection insufficient for
                      aggressive-use qualification
                    </li>
                    <li>• Sampling traceability limitations</li>
                  </ul>
                </div>
                <div className="p-3 rounded-3 bg-success bg-opacity-10 border border-success border-opacity-25">
                  <h6 className="fw-bold text-success small text-uppercase">
                    Strategic Recommendations
                  </h6>
                  <ul className="list-unstyled small text-secondary mb-0">
                    <li>• Conduct extended and cyclic exposure testing</li>
                    <li>• Define measurable QC acceptance criteria</li>
                    <li>• Implement independent sampling protocols</li>
                    <li>• Strengthen production validation framework</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-dark rounded text-center">
              <p className="small text-secondary mb-0">
                <strong>Outcome:</strong> The material demonstrated acceptable
                baseline resistance. Additional structured validation steps were
                recommended to support defensible performance claims.
              </p>
            </div>
          </div>
        </div>

        {/* Report 2: Advanced Materials Advisory */}
        <div className="col-12" data-aos="fade-up" data-aos-delay="100">
          <div
            className="report-box p-4 p-md-5 rounded-4 border border-secondary border-opacity-25"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <h4 className="fw-bold" style={{ color: "#00FB8A" }}>
              Advanced Materials Characterization Advisory
            </h4>
            <p className="text-info small mb-4">
              Translating advanced characterization into fundable,
              performance-driven R&D.
            </p>

            <div className="row">
              <div className="col-md-6">
                <h6 className="fw-bold text-uppercase small text-secondary border-bottom border-secondary pb-2">
                  Executive Summary
                </h6>
                <p className="small text-secondary">
                  Engagement focused on nanoscale surface characterization using
                  Atomic Force Microscopy (AFM) and Scanning Tunneling
                  Microscopy (STM). Objective was to strengthen experimental
                  architecture and align outputs with structured research and
                  advanced funding pathways.
                </p>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold text-uppercase small text-secondary border-bottom border-secondary pb-2">
                  Technical Scope
                </h6>
                <ul className="small text-secondary columns-2">
                  <li>AFM operational mode selection</li>
                  <li>Tip–sample interaction evaluation</li>
                  <li>Quantitative roughness extraction</li>
                  <li>Artifact detection & drift mitigation</li>
                  <li>Bias voltage & current stability (STM)</li>
                  <li>Electronic surface state interpretation</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 rounded bg-info bg-opacity-10 border border-info border-opacity-25">
              <h6 className="fw-bold text-info small text-uppercase">
                Strategic Outcomes
              </h6>
              <div className="row g-2 mt-1">
                <div className="col-md-6 small text-secondary">
                  ✓ Enhanced measurement rigor and reproducibility
                </div>
                <div className="col-md-6 small text-secondary">
                  ✓ Linkage between nanoscale & macro-scale performance
                </div>
                <div className="col-md-6 small text-secondary">
                  ✓ Integrated characterization for research frameworks
                </div>
                <div className="col-md-6 small text-secondary">
                  ✓ Strengthened advanced R&D positioning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 rounded-4 border border-secondary border-opacity-25 text-center">
        <h6 className="text-secondary fw-bold mb-2">Confidentiality Notice</h6>
        <p className="small text-muted mb-0">
          All technical data, proprietary formulation details, and laboratory
          documentation have been anonymized and reformatted to preserve client
          confidentiality. No proprietary formulations or original laboratory
          reports are disclosed. Specific project parameters have been redacted
          to preserve research integrity.
        </p>
      </div>

      <style>{`
        .report-box { transition: all 0.3s ease; }
        .report-box:hover { border-color: #2AD2C1 !important; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .columns-2 { columns: 2; -webkit-columns: 2; -moz-columns: 2; gap: 20px; }
        @media (max-width: 768px) { .columns-2 { columns: 1; } }
      `}</style>
    </div>
  );
};

export default Insights;
