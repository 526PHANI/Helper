import React from "react";
import "./DataStructures.css"; // Import the CSS file for styling
import dsCheatSheet from "./dsCheatSheet.json"; // Import the JSON file

const DataStructures = () => {
  return (
    <div className="ds-container">
      {/* Title */}
      <h1 className="ds-title">Data Structures Cheat Sheet</h1>

      {/* Render Sections */}
      {dsCheatSheet.sections.map((section, sectionIndex) => (
  <section key={sectionIndex}>
    <h2 className="ds-subtitle">{section.title}</h2>
    <div className="ds-cheat-sheet">
      {section.content.map((item, itemIndex) => (
        <React.Fragment key={itemIndex}>
          <div className="description">{item.description}</div>
          
          {/* Handling both string and array details correctly */}
          {Array.isArray(item.details) ? (
            <pre className="code">
              <code>
                {item.details.map((detail, detailIndex) => (
                  <div key={detailIndex}>{detail}</div>
                ))}
              </code>
            </pre>
          ) : (
            <pre className="code">
              <code>{item.details}</code>
            </pre>
          )}
        </React.Fragment>
      ))}
    </div>
  </section>
))}

    </div>
  );
};

export default DataStructures;