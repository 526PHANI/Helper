import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`home-container ${theme}`}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/" className="nav-brand">TIER_3_HELPER</Link>
        <div className="nav-links">
        <a href="#quizzes">Quizzes</a>
        <a href="#resources">Resources</a>
        <a href="#job-career">Jobs</a>
        <a href="#community-interaction">Community</a>

          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      <div className="body_part">
        {/* Heading Section */}
        <header className="header-section">
          <div className="card">
          <p>This website is still under development . I request everyone to give feedback for better improvements</p>

          </div>
        </header>

        {/* Main Content Sections */}
        <main className="main-content">
          {/* Quizzes Section */}
          <section id="quizzes" className="category-section">
            <h2>Quizzes</h2>
            <p className="category-description">
              Test your skills and improve your performance with our timed quizzes. Perfect for interview preparation!
            </p>
            <div className="quiz-cards">
              <Link to="/aptitude" className="quiz-card">
                <h3>🧠 Aptitude Quiz</h3>
                <p>📝 30 Questions | ⏳ 30 mins</p>
                <p>Sharpen your logical and numerical reasoning skills with our aptitude quizzes.</p>
              </Link>
              <Link to="/verbal" className="quiz-card">
                <h3>🗣️ Verbal Quiz</h3>
                <p>📝 30 Questions | ⏳ 30 mins</p>
                <p>Enhance your communication and comprehension skills with verbal ability quizzes.</p>
              </Link>
              <Link to="/coding" className="quiz-card">
                <h3>💻 Coding Quiz</h3>
                <p>📝 30 Questions | ⏳ 30 mins</p>
                <p>Practice coding problems and improve your programming skills for technical interviews.</p>
              </Link>
            </div>
          </section>

          {/* Resources Section */}
          <section id="resources" className="category-section">
            <h2>Resources</h2>
            <p className="category-description">
              Access a wealth of study materials and learning resources to boost your knowledge.
            </p>
            <div className="resource-cards">
              <Link to="/documents" className="resource-card">
                <h3>📚 Document Library</h3>
                <p>🔍 Browse study materials and notes</p>
                <p>Explore a vast collection of study materials, notes, and guides to help you prepare effectively.</p>
              </Link>
              <Link to="/learning" className="resource-card">
                <h3>🎓 Learning Hub</h3>
                <p>Explore Java, Python, SQL, and more!</p>
                <p>Learn and master in-demand skills with our curated tutorials and courses.</p>
              </Link>
            </div>
          </section>

{/* Job & Career Section */}
<section id="job-career" className="category-section">
  <h2>Job & Career</h2>
  <p className="category-description">
    Find job opportunities and advance your career with our job postings.
  </p>
  <div className="job-cards">
    <Link to="/jobs" className="job-card">
      <h3>💼 Job Postings</h3>
      <p>Post and browse job opportunities</p>
      <p>Discover job openings and post your own opportunities to connect with potential employers.</p>
    </Link>
  </div>
</section>

          {/* Community & Interaction Section */}
          <section id="community-interaction" className="category-section">
            <h2>Community & Interaction</h2>
            <p className="category-description">
              Engage with a vibrant community of learners and professionals.
            </p>
            <div className="community-cards">
              <Link to="/chat" className="community-card">
                <h3>🔥 Anonymous Chat</h3>
                <p>Chat with random users</p>
                <p>Connect with others anonymously to discuss topics, share tips, and get advice.</p>
              </Link>
              <Link to="/posts" className="community-card">
                <h3>📝 User Posts</h3>
                <p>Share and interact with job-related posts</p>
                <p>Share your experiences, ask questions, and interact with posts from the community.</p>
              </Link>
            </div>
          </section>
        </main>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>© 2023 Mock Interview Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;