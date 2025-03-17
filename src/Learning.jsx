import { Link, Route, Routes, useLocation } from "react-router-dom";
import Java from "./Java";
import Python from "./Python";
import CProgramming from "./CProgramming";
import CppProgramming from "./CppProgramming";
import DataStructures from "./DataStructures";
import SQL from "./SQL";
import DBMS from "./DBMS";
import OS from "./OS";
import Networking from "./Networking";
import Linux from "./Linux";
import HTML from "./HTML";
import CSS from "./CSS";
import Aptitude from "./Aptitude";
import English from "./English";
import GitHub from "./GitHub";
import OOP from "./OOP";
import "./Learning.css";

const Learning = () => {
  const location = useLocation(); // Get the current route location

  // Check if the current path is the base learning path or a child path
  const isBasePath = location.pathname === "/learning";

  return (
    <div className="learning-container">
      <h1 className="learning-title">Learning Hub</h1>

      {/* Conditionally render the cards only on the base path */}
      {isBasePath && (
        <div className="learning-cards">
          {/* Programming Languages */}
          <h2 className="learning-category">Programming Languages</h2>
          <div className="learning-category-group">
            <Link to="/learning/java" className="learning-card java">
              Java
            </Link>
            <Link to="/learning/python" className="learning-card python">
              Python
            </Link>
            <Link to="/learning/c" className="learning-card c">
              C Programming
            </Link>
            <Link to="/learning/cpp" className="learning-card cpp">
              C++ Programming
            </Link>
          </div>

          {/* Computer Science Topics */}
          <h2 className="learning-category">Computer Science</h2>
          <div className="learning-category-group">
            <Link to="/learning/ds" className="learning-card ds">
              Data Structures
            </Link>
            <Link to="/learning/sql" className="learning-card sql">
              SQL
            </Link>
            <Link to="/learning/dbms" className="learning-card dbms">
              DBMS
            </Link>
            <Link to="/learning/os" className="learning-card os">
              Operating Systems
            </Link>
            <Link to="/learning/networking" className="learning-card networking">
              Networking
            </Link>
            <Link to="/learning/linux" className="learning-card linux">
              Linux
            </Link>
            <Link to="/learning/oop" className="learning-card oop">
              OOP
            </Link>
          </div>

          {/* Web Technologies */}
          <h2 className="learning-category">Web Development</h2>
          <div className="learning-category-group">
            <Link to="/learning/html" className="learning-card html">
              HTML
            </Link>
            <Link to="/learning/css" className="learning-card css">
              CSS
            </Link>
          </div>

          {/* General Topics */}
          <h2 className="learning-category">General Skills</h2>
          <div className="learning-category-group">
            <Link to="/learning/aptitude" className="learning-card aptitude">
              Aptitude
            </Link>
            <Link to="/learning/english" className="learning-card english">
              English
            </Link>
            <Link to="/learning/git" className="learning-card git">
              Git/GitHub
            </Link>
          </div>
        </div>
      )}

      {/* Content Display for Selected Topic */}
      <div className="learning-content">
        <Routes>
          {/* Programming Languages */}
          <Route path="java" element={<Java />} />
          <Route path="python" element={<Python />} />
          <Route path="c" element={<CProgramming />} />
          <Route path="cpp" element={<CppProgramming />} />

          {/* Computer Science Topics */}
          <Route path="ds" element={<DataStructures />} />
          <Route path="sql" element={<SQL />} />
          <Route path="dbms" element={<DBMS />} />
          <Route path="os" element={<OS />} />
          <Route path="networking" element={<Networking />} />
          <Route path="linux" element={<Linux />} />
          <Route path="oop" element={<OOP />} />

          {/* Web Technologies */}
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />

          {/* General Skills */}
          <Route path="aptitude" element={<Aptitude />} />
          <Route path="english" element={<English />} />
          <Route path="git" element={<GitHub />} />
        </Routes>
      </div>
    </div>
  );
};

export default Learning;