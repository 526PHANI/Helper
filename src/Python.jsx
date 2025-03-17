import React from "react";
import "./CProgramming.css"; // Reusing the same CSS
import pythonCheatSheet from "./pythonCheatSheet.json"; // Import Python JSON file

const PythonProgramming = () => {
  return (
    <div className="c-container">
      <h1 className="c-title">Python Programming Interview Questions and Answers</h1>

      {pythonCheatSheet.sections.map((section, sectionIndex) => (
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

export default PythonProgramming;
