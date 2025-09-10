<<<<<<< HEAD
// src/components/Faq.jsx
import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
=======
import React, { useEffect, useState } from "react";
>>>>>>> upstream/main
import AOS from "aos";
import "aos/dist/aos.css";

function Faq() {
  const form = useRef();
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const faqs = [
    {
      q: "What services does SpectraCore Analytics provide?",
      a: "We offer research consulting, analytical testing, computational modeling, process scale-up, data visualization, scientific writing, and training solutions.",
    },
    {
      q: "Who can benefit from your services?",
      a: "Our solutions are designed for academic researchers, chemical & pharma industries, biotech firms, environmental labs, and government organizations.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes, we collaborate with clients worldwide, ensuring global compliance standards (FDA, EU, WHO, ISO, ICH, etc.).",
    },
    {
      q: "How do you ensure data security and confidentiality?",
      a: "All projects are protected by NDAs, encrypted storage, and IP ownership remains with the client by default.",
    },
    {
      q: "Can I request customized solutions?",
      a: "Absolutely—every project is tailored to client needs, whether it's a one-time audit, long-term R&D support, or publication-ready reports.",
    },
    {
      q: "What is your typical project workflow?",
      a: "We follow a structured 7-step process: discovery call, scope definition, proposal, data/sample intake, execution, reporting, and post-project support.",
    },
    {
      q: "How can I get started with SpectraCore Analytics?",
      a: "Simply reach out via our Contact Form or book a consultation through the Appointment Section on our website.",
    },
  ];

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill Name, Email and Your Query.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_i333sph", // Your Service ID
        "template_pb4hbyk", // Your Template ID
        form.current,
        { publicKey: "FXZ9pkNkJxj6TGcv7" } // Your Public Key
      )
      .then(
        () => {
          setSent(true);
          setTimeout(() => {
            setSent(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
          }, 3000);
        },
        (error) => {
          console.error(error);
          setError("Something went wrong. Please try again.");
        }
      );
  }

  return (
    <section className="py-5" style={{ background: "#f2f4f8" }}>
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* FAQ Column */}
          <div className="col-lg-6" data-aos="fade-up">
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: 28,
                boxShadow: "0 12px 30px rgba(18, 26, 40, 0.06)",
              }}
            >
              <div
                style={{
                  marginBottom: 12,
                  color: "#2AD2C1",
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                FAQ'S
              </div>

              <h2
                style={{
                  fontWeight: 800,
                  marginBottom: 18,
                  color: "#2AD2C1",
                }}
              >
                Frequently Asked Questions
              </h2>

              <div style={{ display: "grid", gap: 12 }}>
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    className="faq-item"
                    onClick={() => toggle(i)}
                    style={{
                      background: "#fbfdff",
                      borderRadius: 10,
                      padding: "14px 18px",
                      cursor: "pointer",
                      boxShadow:
                        openIndex === i
                          ? "0 10px 20px rgba(42,210,193,0.3)"
                          : "none",
                      transition: "all 220ms ease",
                      border:
                        openIndex === i
                          ? "1px solid #2AD2C1"
                          : "1px solid transparent",
                    }}
                    data-aos="fade-right"
                    data-aos-delay={i * 60}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ fontWeight: 600, color: "#333" }}>
                        {f.q}
                      </div>
                      <div style={{ color: "#2AD2C1", fontWeight: 800 }}>
                        {openIndex === i ? "−" : "+"}
                      </div>
                    </div>

                    {openIndex === i && (
                      <div
                        style={{
                          marginTop: 10,
                          color: "#6b7280",
                          lineHeight: 1.6,
                        }}
                      >
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message Form Column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="80">
            <div
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: 28,
                boxShadow: "0 12px 30px rgba(18, 26, 40, 0.06)",
              }}
            >
<<<<<<< HEAD
              <h2 style={{ fontWeight: 800, marginBottom: 6 }}>Contact Us</h2>
=======
              <h2
                style={{
                  fontWeight: 800,
                  marginBottom: 6,
                  color: "#2AD2C1",
                }}
              >
                Need Help?
              </h2>
>>>>>>> upstream/main
              <p style={{ marginBottom: 18, color: "#6b7280" }}>
                Have questions not covered in our FAQ? Send us a message and we'll get back to you shortly.
              </p>

              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your full name"
                    style={{ border: "1px solid #2AD2C1" }}
                  />
                </div>

                <div className="mb-3">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    type="email"
                    placeholder="Enter your email address"
                    style={{ border: "1px solid #2AD2C1" }}
                  />
                </div>

                <div className="mb-3">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your phone number"
                    style={{ border: "1px solid #2AD2C1" }}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="form-control"
                    placeholder="Tell us about your question or requirement"
                    style={{ border: "1px solid #2AD2C1" }}
                  />
                </div>

                {error && (
                  <div style={{ color: "#d9534f", marginBottom: 12 }}>
                    {error}
                  </div>
                )}
                {sent && (
<<<<<<< HEAD
                  <div style={{ color: "#0f5132", marginBottom: 12 }}>
                    Message sent successfully! ✅
                  </div>
                )}

=======
                  <div style={{ color: "#00FB8A", marginBottom: 12 }}>
                    Message sent (UI only) ✅
                  </div>
                )}

                {/* ✅ Teal Gradient Button */}
>>>>>>> upstream/main
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    background: "linear-gradient(90deg,#24B7D3,#30EFAD)",
                    border: "none",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  Send Message ✈️
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Inline tiny styles for responsive fix */}
      <style>{`
        @media (max-width: 767px) {
          .container { padding-left: 16px; padding-right: 16px; }
          .faq-item { padding: 12px 14px !important; }
        }
      `}</style>
    </section>
  );
}

export default Faq;