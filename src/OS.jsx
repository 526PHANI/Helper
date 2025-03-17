import React from "react";
import "./OS.css"; // Import the CSS file for styling
import osCheatSheet from "./osCheatSheet.json"; // Import the JSON file

const OS = () => {
  return (
    <div className="os-container">
      {/* Title */}
      <h1 className="os-title">Operating Systems Cheat Sheet</h1>

      {/* Render Sections */}
      {osCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="os-subtitle">{section.title}</h2>
          <div className="os-cheat-sheet">
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

export default OS;