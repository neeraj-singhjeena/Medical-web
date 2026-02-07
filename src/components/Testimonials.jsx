import React, { useState } from "react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState({
    mission: false,
    vision: false,
    coreValues: false,
  });

  const missionText = `To empower scientific research and industry innovation through advanced spectroscopy, materials analysis, and data-driven solutions, delivering precise, reliable, and actionable insights that accelerate discovery and enhance sustainable development across diverse sectors.`;

  const visionText = `To be a global leader in providing cutting-edge analytical and research services that transform complex data into meaningful knowledge, fostering breakthrough technologies and sustainable progress in materials science and beyond.`;

  const coreValuesSummary = `Commitment to highest standards of accuracy, innovation, and quality in analytical services.`;

  const coreValuesFull = (
    <>
      <p>
        <b>Scientific Excellence:</b> Commitment to highest standards of
        accuracy, innovation, and quality in analytical services.
      </p>
      <p>
        <b>Customer Focus:</b> Partnering closely with clients to understand
        their challenges and deliver tailored solutions.
      </p>
      <p>
        <b>Sustainability:</b> Promoting environmentally responsible research
        practices and solutions that support global sustainability goals.
      </p>
      <p>
        <b>Integrity:</b> Upholding transparency, honesty, and ethical
        excellence in all scientific and business endeavors.
      </p>
      <p>
        <b>Collaboration:</b> Building strong multidisciplinary relationships
        with academia, industry, and clients to drive impactful outcomes.
      </p>
      <p>
        <b>Continuous Learning:</b> Embracing cutting-edge technologies and
        ongoing professional development to advance expertise.
      </p>
    </>
  );

  const toggleShowMore = (section) => {
    setShowMore((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const cardStyle = (bgColor) => ({
    background: bgColor,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    padding: "2rem 1.8rem",
    borderRadius: "12px",
    width: "340px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
  });

  const headingStyle = {
    color: "#1a4b8c", // dark text
    marginBottom: "1rem",
    fontSize: "1.3rem",
  };

  const textStyle = {
    color: "#1a4b8c",
    fontSize: "0.95rem",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#2AD2C1",
    fontWeight: 700,
    cursor: "pointer",
    padding: 0,
    marginTop: "1rem",
    alignSelf: "flex-start",
    transition: "color 0.3s ease",
  };

  const buttonHoverStyle = {
    color: "#00FB8A",
  };

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "3.5rem",
        padding: "2rem 3rem",
        flexWrap: "wrap",
        alignItems: "flex-start", // fix: independent heights
      }}
    >
      {/* Mission Card */}
      <div
        style={{
          ...cardStyle("#fafafa"),
        }}
      >
        <h3 style={headingStyle}>Mission</h3>
        <p style={textStyle}>
          {showMore.mission
            ? missionText
            : `${missionText.substring(0, 140)}...`}
        </p>
        <button
          onClick={() => toggleShowMore("mission")}
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.color = buttonHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = buttonStyle.color)}
        >
          {showMore.mission ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>

      {/* Vision Card */}
      <div
        style={{
          ...cardStyle("linear-gradient(135deg, #24B7D3 0%, #30EFAD 100%)"),
          color: "#fff",
        }}
      >
        <h3 style={{ ...headingStyle, color: "#fff" }}>Vision</h3>
        <p style={{ ...textStyle, color: "#fff" }}>
          {showMore.vision ? visionText : `${visionText.substring(0, 140)}...`}
        </p>
        <button
          onClick={() => toggleShowMore("vision")}
          style={{ ...buttonStyle, color: "#fff" }}
          onMouseEnter={(e) => (e.target.style.color = buttonHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = "#fff")}
        >
          {showMore.vision ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>

      {/* Core Values Card */}
      <div style={{ ...cardStyle("#fafafa") }}>
        <h3 style={headingStyle}>Core Values</h3>
        <div style={textStyle}>
          {showMore.coreValues ? (
            coreValuesFull
          ) : (
            <p>
              <b>Scientific Excellence:</b> {coreValuesSummary}
            </p>
          )}
        </div>
        <button
          onClick={() => toggleShowMore("coreValues")}
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.color = buttonHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = buttonStyle.color)}
        >
          {showMore.coreValues ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
