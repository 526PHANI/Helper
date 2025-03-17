import React from "react";
import "./Linux.css"; // Import the CSS file for styling
import linuxCheatSheet from "./linuxCheatSheet.json"; // Import the JSON file

const Linux = () => {
  return (
    <div className="linux-container">
      {/* Title */}
      <h1 className="linux-title">Linux Cheat Sheet</h1>

    
      {/* Render Sections */}
      {linuxCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="linux-subtitle">{section.title}</h2>
          <div className="linux-cheat-sheet">
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

export default Linux;