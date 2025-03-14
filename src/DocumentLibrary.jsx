import React, { useState, useEffect } from "react";
import "./DocumentLibrary.css";

const DocumentLibrary = ({ theme }) => {
  const [documents, setDocuments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("list");

  useEffect(() => {
    fetch("/documents.json")
      .then((response) => response.json())
      .then((data) => setDocuments(data))
      .catch((error) => console.error("Error loading documents:", error));
  }, []);

  const filteredDocuments = documents.filter((doc) =>
    doc.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`document-library ${theme}`}>
      <h2 className="library-title">📚 Study Materials</h2>

      <input
        type="text"
        placeholder="🔍 Search documents..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="view-toggle">
        <button
          className={`toggle-button ${viewMode === "list" ? "active" : ""}`}
          onClick={() => setViewMode("list")}
        >
          📄 List View
        </button>
        <button
          className={`toggle-button ${viewMode === "grid" ? "active" : ""}`}
          onClick={() => setViewMode("grid")}
        >
          🔲 Grid View
        </button>
      </div>

      {viewMode === "list" ? (
        <div className="table-container">
          <table className="documents-table">
            <thead>
              <tr className="table-header">
                <th>Subject</th>
                <th className="des">Description</th>
                <th className="view">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc, index) => (
                  <tr key={index} className="table-row">
                    <td className="subject">{doc.subject}</td>
                    <td className="description">
                      {doc.description || "No description available."}
                    </td>
                    <td className="action">
                      <a
                        href={doc.view_link}
                        className="view-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="no-documents">
                    No documents found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid-container">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map((doc, index) => (
              <div key={index} className="grid-item">
              

                <h3 className="grid-subject">{doc.subject}</h3>
                <p className="grid-description">
                  {doc.description || "No description available."}
                </p>

                <a
                  href={doc.view_link}
                  className="grid-view-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Document
                </a>
              </div>
            ))
          ) : (
            <p className="no-documents">No documents found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentLibrary;