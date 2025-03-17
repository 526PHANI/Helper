import React from "react";
import "./GitHub.css"; // Import the CSS file for styling
import gitCheatSheet from "./gitCheatSheet.json"; // Import the JSON file

const GitHub = () => {
  return (
    <div className="git-container">
      {/* Title */}
      <h1 className="git-title">Git/GitHub Cheat Sheet</h1>

      {/* Render Sections */}
      {gitCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="git-subtitle">{section.title}</h2>
          <div className="git-cheat-sheet">
            {section.content.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <div className="description">{item.description}</div>
                <pre className="code">
                  <code>{item.code}</code>
                </pre>
              </React.Fragment>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default GitHub;