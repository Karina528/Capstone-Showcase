import React from "react";
import asuLogo from "../assets/asuLogo.png";
import '../CSS/Footer.css'

const Footer: React.FC = () => {
    return(
        <footer>
              
              <div className="container">
                  <div className="row1">
                    <table className="table">

                    <td className="col1">
                    <img src={asuLogo} alt="ASU Logo" className="asu-logo-footer" />
                    </td>

                    <td className="col2">
                    <h4>Website</h4>
                    <ul>
                      <li><a href="https://www.asu.edu/">Arizona State University</a></li>
                      <li><a href="http://localhost:5173/survey">Showcase Proposal</a></li>
                      <li><a href="https://betasubmission.asucapstone.com/student-proposal-form">Student Project Proposal</a></li>
                      <li><a href="https://sites.google.com/asu.edu/cidse-capstone/sponsors">Sponsor Proposal</a></li>
                    </ul>
                    </td>
                     
                    <td className = "col3">
                    <h4>get help</h4>
                    <ul>
                      <li><a href="https://asura.asu.edu/tech-support-asu">IT Support</a></li>
                      <li><a href="https://degrees.apps.asu.edu/bachelors">Undergraduate Programs</a></li>
                      <li><a href="https://degrees.apps.asu.edu/masters-phd">Graduate Programs</a></li>
                      <li><a href="https://degrees.apps.asu.edu/bachelors/major-list/accelerated-programs">Accelerated Programs</a></li>
                    </ul>
                      </td>  

                      <td className = "col4">
                    <h4>contact us</h4>
                    <ul>
                      <div className="email-box">
                        <p><a href="mailto:sdosburn@asu.edu">sdosburn@asu.edu</a></p>
                      </div>          
                    </ul>
                      </td>  
                    </table>
                    
                  </div>
                <div className="row2">
                  <div className="column1">
                    <p className="text-center">&copy; {new Date().getFullYear()} ASU Capstone Projects. All rights reserved.</p>
                  </div>
                </div>


              </div>
            
    </footer>
    )
};

export default Footer;