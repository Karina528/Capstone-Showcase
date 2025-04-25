import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Survey.css"; 
import "../CSS/SponsorSurvey.css"; 
import Footer from "../Pages/Footer";  

interface FormData {
  name: string;
  email: string;
  projectTitle: string;
  projectDescription: string;
  sponsor: string;
  numberOfTeamMembers: string;
  teamMemberNames: string;
  major: string;
  demo: string;
  power?: string;
  nda: string;
  youtubeLink: string;
}

interface FormErrors {
  name: string;
  email: string;
  projectTitle: string;
  projectDescription: string;
  sponsor: string;
  numberOfTeamMembers: string;
  teamMemberNames: string;
  major: string;
  demo: string;
  power: string;
  nda: string;
  youtubeLink: string;
}

const SponsorSurvey: React.FC = () => {
  const initialFormData: FormData = {
    name: "",
    email: "",
    projectTitle: "",
    projectDescription: "",
    sponsor: "",
    numberOfTeamMembers: "",
    teamMemberNames: "",
    major: "",
    demo: "",
    power: "",
    nda: "",
    youtubeLink: "",
  };

  const initialFormErrors: FormErrors = {
    name: "",
    email: "",
    projectTitle: "",
    projectDescription: "",
    sponsor: "",
    numberOfTeamMembers: "",
    teamMemberNames: "",
    major: "",
    demo: "",
    power: "",
    nda: "",
    youtubeLink: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialFormErrors);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [proposals, setProposals] = useState<FormData[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      //.get("https://asucapstone.com:3000/api/survey/sponsorsurvey")
      .get("http://localhost:3000/api/survey/")
      .then((response) => {
        setProposals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching proposals:", error);
      });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "demo" && value === "no") {
      setFormData((prev) => ({ ...prev, power: "" }));
    }

    setErrors({ ...errors, [name]: "" });
  };

  const validateFormData = (formData: FormData): FormErrors => {
    const {
      name,
      email,
      projectTitle,
      projectDescription,
      sponsor,
      numberOfTeamMembers,
      teamMemberNames,
      major,
      demo,
      nda,
    } = formData;

    const errors: FormErrors = {
      email: !email ? "Please enter your ASU email." : "",
      name: !name ? "Please enter your name." : "",
      projectTitle: !projectTitle ? "Please select a project title." : "",
      projectDescription: !projectDescription
        ? "Please enter a project description."
        : "",
      sponsor: !sponsor ? "Please enter the name of your sponsor/mentor." : "",
      numberOfTeamMembers: !numberOfTeamMembers
        ? "Please enter the number of team members."
        : "",
      teamMemberNames: !teamMemberNames
        ? "Please enter the full names of all team members, including yourself, separated by commas."
        : "",
      major: !major ? "Please select a course number." : "",
      demo: !demo ? "Please specify if your group will be bringing a demo." : "",
      power: "",
      nda: !nda ? "Please specify if your group signed an NDA or IP." : "",
      youtubeLink: "",
    };

    if (parseInt(numberOfTeamMembers, 10) <= 0) {
      errors.numberOfTeamMembers = "The number of team members must be at least 1.";
    }

    if (demo === "yes" && !formData.power) {
      errors.power = "Please specify if your group will need power for your demo.";
    }

    return errors;
  };

  const hasErrors = (errors: FormErrors) => {
    return Object.values(errors).some((error) => error !== "");
  };

  const scrollToFirstError = () => {
    const firstError = document.querySelector(".error-message");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prepareSubmissionData = (formData: FormData) => {
    const submissionData = { ...formData };
    if (formData.demo === "no") {
      delete submissionData.power;
    }
    return submissionData;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateFormData(formData);
    setErrors(formErrors);

    if (hasErrors(formErrors)) {
      scrollToFirstError();
      return;
    }

    const submissionData = prepareSubmissionData(formData);

    axios
      //.post("https://asucapstone.com:3000/api/survey", submissionData)
      .post("http://localhost:3000/api/survey/", submissionData)
      .then(() => {
        setFormData(initialFormData);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          navigate("/");
        }, 3000);
      })
      .catch((error: { message: string }) => {
        console.error("Error submitting survey data:", error);
      });
  };

  return (
    <div className="sponsor-survey-container">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Sponsor Proposal Form</h1>
          <p className="card-description">
            Please fill out the form below to submit your capstone project proposal.
          </p>
        </div>
        <div className="card-content">
          {isSubmitted && (
            <div className="success-message">
              <p>
                Thank you for submitting your survey! Your response has been
                recorded successfully.
              </p>
              <button onClick={() => navigate("/")} className="ok-button">
                OK
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="form-box">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-box">
              <label htmlFor="email">ASU Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-box">
              <label htmlFor="projectTitle">Project Title:</label>
              <input
                type="text"
                name="projectTitle"
                id="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
              />
              {errors.projectTitle && (
                <p className="error-message">{errors.projectTitle}</p>
              )}
            </div>
            <div className="form-box">
              <label htmlFor="projectDescription">Project Description:</label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
              />
              {errors.projectDescription && (
                <p className="error-message">{errors.projectDescription}</p>
              )}
            </div>
            <div className="form-box">
              <label htmlFor="sponsor">Sponsor/Mentor:</label>
              <input
                type="text"
                name="sponsor"
                id="sponsor"
                value={formData.sponsor}
                onChange={handleChange}
              />
              {errors.sponsor && <p className="error-message">{errors.sponsor}</p>}
            </div>
            <div className="form-box">
              <button type="submit" className="submit-button">
                Submit Proposal
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="proposals-list">
        <h2>Submitted Proposals</h2>
        {proposals.length === 0 ? (
          <p>No proposals available at this time.</p>
        ) : (
          proposals.map((proposal, idx) => (
            <div key={idx} className="proposal-card">
              <h3>{proposal.projectTitle}</h3>
              <p>{proposal.projectDescription}</p>
              <p>
                <strong>Sponsor:</strong> {proposal.sponsor}
              </p>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SponsorSurvey;
