import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMenuContext } from "./MenuContext";
import arrowIcon from "./assets/newArrow.png";
import asuLogo from "./assets/asuLogo.png";
import "./Menu.css";

const Menu: React.FC = () => {
  const { pathname } = useLocation();
  const { isSideMenu, toggleMenu } = useMenuContext();
  const [isPastSemestersOpen, setIsPastSemestersOpen] = useState(false);
  const [isMajorsOpen, setIsMajorsOpen] = useState(false); // State for majors collapsible section
  const submenuRef = useRef<HTMLLIElement>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<number | null>(null);

  const togglePastSemesters = () => {
    setIsPastSemestersOpen((prev) => !prev);
  };

  const toggleMajors = () => {
    setIsMajorsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
      setIsPastSemestersOpen(false);
    }
  };

  const handleMouseLeave = () => {
    const timeout = window.setTimeout(() => {
      setIsPastSemestersOpen(false);
    }, 100);
    setLeaveTimeout(timeout);
  };

  const handleMouseEnter = () => {
    if (leaveTimeout) {
      window.clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`page-container ${isSideMenu ? 'side-menu' : 'top-menu'}`}>
      <div className="menu-container">
      <img src={asuLogo} alt="ASU Logo" className="asu-logo" />
        <button className="toggle-button" onClick={toggleMenu}>
          <i className={`fas ${isSideMenu ? 'fa-arrow-up' : 'fa-arrow-left'}`}></i>
        </button>
        <div className="menu">
          <ul className="menu-list">
            <li className={`menu-item ${pathname === "/" ? "active" : ""}`}>
              <Link to="/" className="home-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="32px" height="32px" className="home-icon">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </Link>
            </li>
            {!isSideMenu && (
              <>
              <li className={`menu-item ${pathname === "/computer-science" ? "active" : ""}`}>
                  <Link to="/computer-science">Computer Science<br />Teams</Link>
                </li>
              <li className={`menu-item ${pathname === "/computer-systems-engineering" ? "active" : ""}`}>
                  <Link to="/computer-systems-engineering">Computer Systems<br />Engineering</Link>
                </li>
                <li className={`menu-item ${pathname === "/biomedical-engineering" ? "active" : ""}`}>
                    <Link to="/biomedical-engineering">Biomedical Engineering<br />Teams</Link>
                </li>
                {isMajorsOpen && (
                  <>
                    <li className={`menu-item ${pathname === "/mechanical-engineering" ? "active" : ""}`}>
                      <Link to="/mechanical-engineering">Mechanical Engineering<br />Teams</Link>
                    </li>
                    <li className={`menu-item ${pathname === "/electrical-engineering" ? "active" : ""}`}>
                      <Link to="/electrical-engineering">Electrical Engineering<br />Teams</Link>
                    </li>
                    <li className={`menu-item ${pathname === "/interdisciplinary" ? "active" : ""}`}>
                      <Link to="/interdisciplinary">Interdisciplinary<br />Teams</Link>
                    </li>
                    <li className={`menu-item ${pathname === "/industrial-engineering" ? "active" : ""}`}>
                      <Link to="/industrial-engineering">Industrial Engineering<br />Teams</Link>
                    </li>
                  </>
                )}
                <div className="majors-title" onClick={toggleMajors}>
                  {isMajorsOpen ? 'Less' : 'More'}
                  <br />
                  <img src={arrowIcon} alt="Arrow Icon" className={`arrow ${isMajorsOpen ? "revArrow" : ""}`} />
                </div>
              </>
            )}
            {isSideMenu && (
              <>
              <li className={`menu-item ${pathname === "/computer-science" ? "active" : ""}`}>
                  <Link to="/computer-science">Computer Science<br />Teams</Link>
                </li>
               <li className={`menu-item ${pathname === "/computer-systems-engineering" ? "active" : ""}`}>
                  <Link to="/computer-systems-engineering">Computer Systems Engineering<br />Teams</Link>
                </li>
                <li className={`menu-item ${pathname === "/biomedical-engineering" ? "active" : ""}`}>
                  <Link to="/biomedical-engineering">Biomedical Engineering<br />Teams</Link>
                </li>
                <li className={`menu-item ${pathname === "/mechanical-engineering" ? "active" : ""}`}>
                  <Link to="/mechanical-engineering">Mechanical Engineering<br />Teams</Link>
                </li>
                <li className={`menu-item ${pathname === "/electrical-engineering" ? "active" : ""}`}>
                  <Link to="/electrical-engineering">Electrical Engineering<br />Teams</Link>
                </li>
                <li className={`menu-item ${pathname === "/interdisciplinary" ? "active" : ""}`}>
                  <Link to="/interdisciplinary">Interdisciplinary<br />Teams</Link>
                </li>
                <li className={`menu-item ${pathname === "/industrial-engineering" ? "active" : ""}`}>
                  <Link to="/industrial-engineering">Industrial Engineering<br />Teams</Link>
                </li>
              </>
            )}
            <li
              className="submenu-container"
              ref={submenuRef}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <div className="submenu-title" onClick={togglePastSemesters}>
                Past Semesters <span className="arrow">{isPastSemestersOpen ? "▲" : "▼"}</span>
              </div>
              {isPastSemestersOpen && (
                <ul className="submenu-list">
                  <li>
                    <Link to="/past-semesters/spring-2024">Spring 2024</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;