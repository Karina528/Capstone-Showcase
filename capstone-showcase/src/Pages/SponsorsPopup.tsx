import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom's Link instead of Next.js Link
import Footer from "../Pages/Footer"; 

const SimpleHeader: React.FC = () => (
  <div style={{
    backgroundColor: "#8C1D40",
    color: "white",
    padding: "20px",
    textAlign: "center"
  }}>
    <h1>Sponsors</h1>
    <p>
      Support innovation and help shape the next generation of tech leaders by sponsoring a capstone project!
    </p>
  </div>
);

const SponsorsPopup: React.FC = () => {
  return (
    <div className="sponsors-popup-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(to bottom, #f7f7f7, #ffffff)", color: "#333" }}>
      <SimpleHeader />

      {/* Hero section */}
      <section style={{
        background: "linear-gradient(to right, #8C1D40, #620E2B)",
        color: "white",
        padding: "24px 0"
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", padding: "0 16px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Sponsors</h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
            Support innovation and help shape the next generation of tech leaders by sponsoring a capstone project!
          </p>
        </div>
      </section>

      {/* Main content area */}
      <main className="popup-main" style={{ flexGrow: 1, maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
        {/* Card: Submit a Project Proposal */}
        <div className="card" style={{
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          marginBottom: "24px",
          padding: "16px"
        }}>
          <div className="card-header" style={{ marginBottom: "12px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#8C1D40" }}>
              Submit a Project Proposal
            </h2>
          </div>
          <div className="card-content">
            <p style={{ marginBottom: "12px" }}>
              Interested in sponsoring a capstone project? Click the button below to submit your proposal.
            </p>
            <Link to="/sponsor-proposal-form" style={{
              display: "inline-block",
              backgroundColor: "#8C1D40",
              color: "white",
              padding: "10px 20px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "background-color 0.3s ease"
            }}>
              Submit a Project Proposal
            </Link>
          </div>
        </div>

        <div className="card" style={{
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "16px"
        }}>
          <div className="card-header" style={{ marginBottom: "12px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#8C1D40" }}>
              What are CS and CSE Capstone Projects?
            </h2>
          </div>
          <div className="card-content">
            <p style={{ marginBottom: "12px" }}>
              Capstone is a senior design course that showcases the skills of undergraduate students in Computer Science and Computer Systems Engineering. Learn more about how these projects help bridge the gap between academia and the professional world.
            </p>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SponsorsPopup;
