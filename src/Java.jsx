import React from "react";
import "./cp.css"; // Reusing the same CSS
import javaCheatSheet from "./javaCheatSheet.json"; // Import Java JSON file

const JavaProgramming = () => {
  return (
    <div className="c-container">
      <h1 className="c-title">Java Programming Interview Questions and Answers</h1>

      {javaCheatSheet.sections.map((section, sectionIndex) => (
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

export default JavaProgramming;
