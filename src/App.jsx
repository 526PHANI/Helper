import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AptitudeQuiz from "./AptitudeQuiz";
import VerbalQuiz from "./VerbalQuiz";
import CodingQuiz from "./CodingQuiz";
import DocumentLibrary from "./DocumentLibrary"; // Import DocumentLibrary
import Chat from "./Chat"; 
import Post from "./Post";  // Import the Post component
import Learning from "./Learning";  // Import Learning component
import Jobs from "./Jobs"; 
import "./App.css";


function App() {
  return (
  

    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aptitude" element={<AptitudeQuiz />} />
        <Route path="/verbal" element={<VerbalQuiz />} />
        <Route path="/coding" element={<CodingQuiz />} />
        <Route path="/documents" element={<DocumentLibrary />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/learning/*" element={<Learning />} /> {/* Add Learning Route */}
        <Route path="/jobs" element={<Jobs />} /> 
      </Routes>
    </Router>

  );
}

export default App;
