import React from "react";
import "./English.css"; // Import the CSS file for styling
import englishCheatSheet from "./englishCheatSheet.json"; // Import the JSON file

const English = () => {
  return (
    <div className="english-container">
      {/* Title */}
      <h1 className="english-title">English Cheat Sheet</h1>

      {/* Render Sections */}
      {englishCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="english-subtitle">{section.title}</h2>
          <div className="english-cheat-sheet">
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

export default English;