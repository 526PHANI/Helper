import React from "react";
import "./Networking.css"; // Import the CSS file for styling
import networkingCheatSheet from "./networkingCheatSheet.json"; // Import the JSON file

const Networking = () => {
  return (
    <div className="networking-container">
      {/* Title */}
      <h1 className="networking-title">Networking Cheat Sheet</h1>

      {/* Render Sections */}
      {networkingCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="networking-subtitle">{section.title}</h2>
          <div className="networking-cheat-sheet">
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

export default Networking;