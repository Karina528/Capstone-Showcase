import React, { useEffect, useState } from "react";
import { useMenuContext } from "../MenuContext";
import "../CSS/MechanicalEngineering.css";
// import { capstoneDescription } from "../TextContent";
import asuLogo from "../assets/asuLogo.png";
import Footer from './Footer';
import { useNavigate, useSearchParams } from "react-router-dom";


const MechanicalEngineering: React.FC = () => {
  const { isSideMenu } = useMenuContext();
  const [searchParams] = useSearchParams();
  const selectedSemester = searchParams.get("semester");
  const selectedYear = searchParams.get("year");
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any[]>([]); // State to store fetched projects
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
      console.log("Selected semseter:", selectedSemester, selectedYear)
      document.body.classList.add("mechanical-engineering-page-body");

      //fetch(`https://localhost:3000/api/survey/mechanical-engineering/term=${selectedSemester}-${selectedYear}`)// Fetch projects for the Computer Science major
      fetch(`https://asucapstone.com:3000/api/survey/mechanical-engineering/term=${selectedSemester}-${selectedYear}`)// Fetch projects for the Computer Science major
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => setProjects(data))
        .catch((error) => console.error("Error fetching projects:", error));
  
      return () => {
        document.body.classList.remove("mechanical-engineering-page-body");
      };
    }, [selectedSemester, selectedYear]);

  const extractYouTubeThumbnail = (url: string): string | null => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i;
    const match = url.match(regex);
    return match ? `https://img.youtube.com/vi/${match[1]}/0.jpg` : null;
  };

  const handleSurveyFormClick = () => {
    navigate("/survey");
  };

  const handleMoreProjectsClick = () => {
    navigate("/interdisciplinary");
  };

  const getSemesterLabel = () => {



    if (selectedSemester === "fa") return `Fall ${selectedYear}`;



    if (selectedSemester === "sp") return `Spring ${selectedYear}`;



    return "";



  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={`mechanical-engineering ${isSideMenu ? "compressed" : ""}`}>
      <header className="header-background"></header>
      <main className="content-area">
        <section className="event-details">
          <article>
            <img src={asuLogo} alt="ASU Logo" className="asu-logo" />
            <div className="title-container">
              <h3>Mechanical Engineering</h3>
              <button
                className="survey-form-button"
                onClick={handleSurveyFormClick}
                aria-label="Survey Form Button"
              >
                Survey Form
              </button>
            </div>
          </article>
        </section>

        <section className="projects-list">
          {projects.length === 0 ? (
            <p>No projects available for Mechanical Engineering.</p>
          ) : (
            projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${index % 2 === 0 ? "zigzag-left" : "zigzag-right"}`}
                onClick={() => handleProjectClick(project)}
              >
                {index % 2 === 0 && project.youtubeLink && (
                  <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={extractYouTubeThumbnail(project.youtubeLink) || ""}
                      alt={`${project.projectTitle} Thumbnail`}
                      className="youtube-thumbnail"
                    />
                  </a>
                )}
                <div className="project-details">
                  <h4 className="project-title">{project.projectTitle}</h4>
                  <p>
                    
                  </p>
                </div>
                {index % 2 !== 0 && project.youtubeLink && (
                  <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={extractYouTubeThumbnail(project.youtubeLink) || ""}
                      alt={`${project.projectTitle} Thumbnail`}
                      className="youtube-thumbnail"
                    />
                  </a>
                )}
              </div>
            ))
          )}
                              <button
                  className="more-projects-button"
                  onClick={handleMoreProjectsClick}
                  aria-label="More Projects Button"
                >
                  Like what you see or don't see your project? Click here to see interdisciplinary projects!
                </button>
        </section>
      </main>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>X</button>
            <div className="project-menu">
              <header className="modal-header-background" >
              </header>
            </div>           
            <div className="project-header">
              <div className="project-image">
                {selectedProject.youtubeLink && (
                  <a 
                    href={selectedProject.youtubeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Project Video"
                  >
                    <p style={{ color: "#555" }}>Click Video to View</p>
                    <img 
                      src={extractYouTubeThumbnail(selectedProject.youtubeLink) || ""} 
                      alt={`${selectedProject.projectTitle} Thumbnail`}
                    />
                  </a>
                )}
              </div>

              <div className="project-info">
                <span className="semester-tag">{getSemesterLabel()}</span>
                <img src={asuLogo} alt="ASU Logo" className="modal-asu-logo" />
                <h2 className="project-title">
                  {selectedProject.projectTitle}
                </h2>
                <p className="project-category">
                
                Mechanical Engineering</p>

                <p className="team-members">
                  
                  {selectedProject.teamMemberNames}
                </p>
              </div>
            </div>
            <div className="project-details">
              <div className="left-section">
                <h3>Poster</h3>
                
              <div className="right-section">
                <div className="poster-container">
                  <p>
                    
                  </p>
                  {selectedProject.posterPicturePath ? (



<div className="poster-container">


<img

  //src={`http://localhost:3000${selectedProject.posterPicturePath}`}
  src={`https://asucapstone.com:3000${selectedProject.posterPicturePath}`}

  alt="Project Poster"

  style={{ maxWidth: '100%', maxHeight: 600 }}

/>

</div>

) : (

  <p>No poster uploaded.</p>

)}

{selectedProject.teamPicturePath ? (
                    <div>
                      <h3 style={{ marginBottom: '1rem' }}>Team Photos</h3>

                      {(selectedProject.teamPicturePath || "")
                        .split(",")
                        .map((path: string, index: number) => {
                          const trimmedPath = path.trim();
                          return (
                            <img
                              key={index}
                              //src={`http://localhost:3000${trimmedPath}`}
                              src={`https://asucapstone.com:3000${trimmedPath}`}
                              alt={`Team Photo ${index + 1}`}
                              style={{ maxWidth: '100%', maxHeight: 400, marginBottom: '1rem' }}
                            />
                          );
                        })}
                    </div>
                  ) : (
                    <p>No team image uploaded.</p>
                  )}
                </div>
              </div>
                <h3>Abstract</h3>
                <p>{selectedProject.projectDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MechanicalEngineering;
