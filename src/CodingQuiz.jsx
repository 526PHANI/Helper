import React, { useState, useEffect } from "react";
import axios from "axios";
import { Editor } from "@monaco-editor/react";
import codingQuestions from "./coding_questions.json";
import "./CodingQuiz.css"; // Ensure you have this CSS file

const languageOptions = {
  "C": 50,
  "C++": 54,
  "Python": 71,
  "JavaScript": 63,
  "Java": 62,
};

const CodingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const question = codingQuestions[currentQuestion];

  useEffect(() => {
    setUserCode(`def ${question.function_name}(${question.parameters}):\n    # Write your code here`);
  }, [currentQuestion, question.function_name, question.parameters]);

  const executeCode = async () => {
    setLoading(true);
    setOutput(null);

    const testCases = question.test_cases;
    let passedCases = 0;
    let results = [];

    for (let test of testCases) {
      const payload = {
        source_code: userCode,
        language_id: languageOptions[selectedLanguage],
        stdin: test.input,
      };

      try {
        const { data } = await axios.post("https://judge0-ce.p.rapidapi.com/submissions", payload, {
          headers: {
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY", // Replace with your actual API key
          },
        });

        const resultId = data.token;
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${resultId}`, {
          headers: {
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY", // Replace with your actual API key
          },
        });

        if (response.data.stdout && response.data.stdout.trim() === test.expected_output.trim()) {
          passedCases++;
          results.push(`✅ Test Passed: ${test.input}`);
        } else {
          results.push(`❌ Failed: ${test.input}, Expected: ${test.expected_output}, Got: ${response.data.stdout || "Error"}`);
        }
      } catch (error) {
        results.push("Error in execution");
      }
    }

    setOutput({
      passed: passedCases,
      total: testCases.length,
      results,
    });

    setLoading(false);
  };

  return (
    <div className="leetcode-container">
      <div className="question-panel">
        <h2 className="question-title">Question {currentQuestion + 1}</h2>
        <p className="question-description">{question.question}</p>
      </div>

      <div className="editor-panel">
        <div className="editor-header">
          <label className="language-label">Language:</label>
          <select
            className="language-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {Object.keys(languageOptions).map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <Editor
          height="400px"
          language={selectedLanguage.toLowerCase()}
          theme="vs-dark"
          value={userCode}
          onChange={(value) => setUserCode(value)}
        />
        <button className="run-button" onClick={executeCode} disabled={loading}>
          {loading ? "Running..." : "Run Code"}
        </button>
      </div>

      {output && (
        <div className="results-panel">
          <h3 className="results-title">Results:</h3>
          {output.results.map((res, idx) => (
            <p key={idx} className="result-item">
              {res}
            </p>
          ))}
          <h4 className="score">Score: {output.passed} / {output.total}</h4>
        </div>
      )}

      <div className="navigation-panel">
        <button
          className="nav-button"
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          className="nav-button"
          disabled={currentQuestion === codingQuestions.length - 1}
          onClick={() => setCurrentQuestion((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CodingQuiz;