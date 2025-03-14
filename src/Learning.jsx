import { Link, Route, Routes } from "react-router-dom";
import Java from "./Java";
import Python from "./Python";
import SQL from "./SQL";
import "./Learning.css"; // Importing the separate CSS file

const Learning = () => {
  return (
    <div className="learning-container">
      <h1 className="learning-title">Learning Hub</h1>

      {/* Card Layout for Programming Topics */}
      <div className="learning-cards">
        <Link to="/learning/java" className="learning-card">Java</Link>
        <Link to="/learning/python" className="learning-card">Python</Link>
        <Link to="/learning/sql" className="learning-card">SQL</Link>
      </div>

      {/* Content Display for Selected Topic */}
      <div className="learning-content">
        <Routes>
          <Route path="java" element={<Java />} />
          <Route path="python" element={<Python />} />
          <Route path="sql" element={<SQL />} />
        </Routes>
      </div>
    </div>
  );
};

export default Learning;
