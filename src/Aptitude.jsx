import React from "react";
import "./Aptitude.css"; // Import the CSS file for styling
import aptitudeCheatSheet from "./aptitudeCheatSheet.json"; // Import the JSON file

const Aptitude = () => {
  return (
    <div className="aptitude-container">
      {/* Title */}
      <h1 className="aptitude-title">Aptitude Cheat Sheet</h1>

      {/* Render Sections */}
      {aptitudeCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="aptitude-subtitle">{section.title}</h2>
          <div className="aptitude-cheat-sheet">
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

export default Aptitude;