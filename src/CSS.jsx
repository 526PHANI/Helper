import React from "react";
import "./CSS.css"; // Import the CSS file for styling
import cssCheatSheet from "./cssCheatSheet.json"; // Import the JSON file

const CSS = () => {
  return (
    <div className="css-container">
      {/* Title */}
      <h1 className="css-title">CSS Cheat Sheet</h1>

      {/* Render Sections */}
      {cssCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="css-subtitle">{section.title}</h2>
          <div className="css-cheat-sheet">
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

export default CSS;