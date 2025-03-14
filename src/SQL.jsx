import React from "react";
import "./SQL.css";
import sqlCheatSheet from "./sqlCheatSheet.json"; // Import the JSON file

const SQL = () => {
  return (
    <div className="sql-container">
      {/* Title */}
      <h1 className="sql-title">SQL Cheat Sheet</h1>

      {/* First Image */}
      <div className="sql-image-container">
        <img src="/image2.png" alt="SQL Diagram 2" className="sql-image" />
      </div>
      <div className="sql-image-container">
        <img src="/image1.jpg" alt="SQL Diagram 1" className="sql-image" />
      </div>
     

      {/* Render Sections */}
      {sqlCheatSheet.sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <h2 className="sql-subtitle">{section.title}</h2>
          <div className="sql-cheat-sheet">
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

      {/* Second Image */}
    
    </div>
  );
};

export default SQL;