import React from "react";
import "./cp.css";
 // Import the CSS file for styling
import cCheatSheet from "./cCheatSheet.json"; // Import the JSON file

const Cp = () => {
  return (
    <div className="c-container">
      {/* Title */}
      <h1 className="c-title">C Programming Interview Questions and Answers</h1>

      {/* Render Sections */}
      {cCheatSheet.sections.map((section, sectionIndex) => (
  <section key={sectionIndex}>
    <h2 className="c-subtitle">{section.title}</h2>
    <div className="c-cheat-sheet">
      {section.content.map((item, itemIndex) => (
        <React.Fragment key={itemIndex}>
          <div className="description">{item.question}</div>
          <pre className="code">
            <code>{item.answer}</code>
          </pre>
        </React.Fragment>
      ))}
    </div>
  </section>

      ))}
    </div>
  );
};

export default Cp;