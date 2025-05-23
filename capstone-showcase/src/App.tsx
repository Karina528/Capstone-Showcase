import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MenuProvider } from "./MenuContext";
import Menu from "./Menu";
import PreEventLandingPage from "./Pages/PreEventLandingPage";
import ComputerScience from "./Pages/ComputerScience";
import ComputerSystemsEngineering from "./Pages/ComputerSystemsEngineering";
import IndustrialEngineering from "./Pages/IndustrialEngineering";
//import Survey from "./Pages/Survey";
import Informatics from "./Pages/Informatics";
import Interdisciplinary from "./Pages/Interdisciplinary";
import ElectricalEngineering from "./Pages/ElectricalEngineering";
import BiomedicalEngineering from "./Pages/BiomedicalEngineering";
import About from "./Pages/About";
import MechanicalEngineering from "./Pages/MechanicalEngineering";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import EditPresentation from "./Pages/EditPresentation";
import EditSubmissions from "./Pages/EditSubmissions";
import ContactSupport from "./Pages/ContactSupport";

const App: React.FC = () => {
  return (
    <MenuProvider>
      <Router>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<PreEventLandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/computer-science" element={<ComputerScience />} />
            <Route
              path="/computer-systems-engineering"
              element={<ComputerSystemsEngineering />}
            />
            <Route
              path="/biomedical-engineering"
              element={<BiomedicalEngineering />}
            />
            <Route
              path="/mechanical-engineering"
              element={<MechanicalEngineering />}
            />
            <Route
              path="/electrical-engineering"
              element={<ElectricalEngineering />}
            />
            <Route
              path="/industrial-engineering"
              element={<IndustrialEngineering />}
            />
            <Route path="/informatics" element={<Informatics />} />
            <Route path="/interdisciplinary" element={<Interdisciplinary />} />
            {/* <Route path="/survey" element={<Survey />} /> */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="admin-dashboard" element={<AdminDashboard pageTitle="Dashboard" />} />
            <Route path="admin-dashboard/edit" element={<AdminDashboard pageTitle="Edit" />} />
            <Route path="admin-dashboard/edit/presentation" element={<EditPresentation />} />
            <Route path="admin-dashboard/edit/submissions" element={<EditSubmissions />} />


            <Route path="admin-dashboard/support" element={<ContactSupport />} />
          </Routes>
        </div>
      </Router>
    </MenuProvider>
  );
};

export default App;
