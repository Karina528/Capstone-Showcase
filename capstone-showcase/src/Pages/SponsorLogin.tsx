import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Pages/AuthContext";
import "../CSS/SponsorLogin.css";
import asuLogoPlain from "../assets/asuLogoPlain.png";
import SponsorsPopup from "./SponsorsPopup"; 

const SponsorLogin: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { login } = useContext(AuthContext);

  useEffect(() => {
    document.body.classList.add("sponsor-login-page-body");
    return () => {
      document.body.classList.remove("sponsor-login-page-body");
    };
  }, []);

  const handleLoginClick = () => {
    login("Sponsor");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="box">
        <img src={asuLogoPlain} alt="ASU Logo" className="logo" />
        <h2 className="sponsor-login-title">Sponsor Login</h2>
        <button type="button" className="button" onClick={handleLoginClick}>
          Open Sponsor Portal
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>X</button>
            <SponsorsPopup />
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorLogin;
