import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`home-container ${theme}`}>
      {/* Navigation Bar */}


      <div className="body_part">
        {/* Header Section */}
        
        
        

        {/* Main Content Sections */}
        <main className="main-content">
          {/* Resources Section */}
          <section id="resources" className="category-section">
            <h2>Resources</h2>
            <div className="resource-cards">
              <Link to="/documents" className="resource-card">
                <h3>📚 Documents</h3>
                <p>Explore all B.Tech and Degree Documents</p>
              </Link>
              <Link to="/learning" className="resource-card">
                <h3>🎓 Learn</h3>
                <p>Cheat Sheets of JAVA, SQL, and more</p>
              </Link>
            </div>
          </section>

          {/* Job & Career Section */}
          <section id="job-career" className="category-section">
            <h2>Job & Career</h2>
            <div className="job-cards">
              <Link to="/jobs" className="job-card">
                <h3>💼 Jobs</h3>
                <p>Apply for new job openings</p>
              </Link>
            </div>
          </section>

          {/* Quizzes Section */}
          <section id="quizzes" className="category-section">
            <h2>Quizzes</h2>
            <div className="quiz-cards">
              <Link to="/aptitude" className="quiz-card">
                <h3>🧠 Aptitude Quiz</h3>
                <p>30 Questions | 30 mins</p>
              </Link>
              <Link to="/verbal" className="quiz-card">
                <h3>🗣️ Verbal Quiz</h3>
                <p>30 Questions | 30 mins</p>
              </Link>
              <Link to="/coding" className="quiz-card">
                <h3>💻 Coding Challenge</h3>
                <p>Test your coding skills</p>
              </Link>
            </div>
          </section>

          {/* Community & Interaction Section */}
          <section id="community-interaction" className="category-section">
            <h2>Community & Interaction</h2>
            <div className="community-cards">
              <Link to="/chat" className="community-card">
                <h3>🔥 Anonymous Chat</h3>
                <p>Chat with random users</p>
              </Link>
              <Link to="/posts" className="community-card">
                <h3>📝 User Posts</h3>
                <p>Share and interact with posts</p>
              </Link>
            </div>
          </section>
        </main>
      </div>
 

    </div>
  );
};

export default Home;