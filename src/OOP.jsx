import React from "react";
import "./OOP.css"; // Import the CSS file for styling
import oopCheatSheet from "./oopCheatSheet.json"; // Import the JSON file

const OOP = () => {
  return (
    <div className="oop-container">
      {/* Title */}
      <h1 className="oop-title">Object-Oriented Programming (OOP) Cheat Sheet</h1>

      {/* Render Sections */}
      {oopCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="oop-subtitle">{section.title}</h2>
          <div className="oop-cheat-sheet">
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

export default OOP;