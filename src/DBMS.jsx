import React from "react";
import "./DBMS.css"; // Import the CSS file for styling
import dbmsCheatSheet from "./dbmsCheatSheet.json"; // Import the JSON file

const DBMS = () => {
  return (
    <div className="dbms-container">
      {/* Title */}
      <h1 className="dbms-title">DBMS Cheat Sheet</h1>

      {/* Render Sections */}
      {dbmsCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="dbms-subtitle">{section.title}</h2>
          <div className="dbms-cheat-sheet">
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

export default DBMS;