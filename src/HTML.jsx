import React from "react";
import "./HTML.css"; // Import the CSS file for styling
import htmlCheatSheet from "./htmlCheatSheet.json"; // Import the JSON file

const HTML = () => {
  return (
    <div className="html-container">
      {/* Title */}
      <h1 className="html-title">HTML Cheat Sheet</h1>

      {/* Render Sections */}
      {htmlCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="html-subtitle">{section.title}</h2>
          <div className="html-cheat-sheet">
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

export default HTML;