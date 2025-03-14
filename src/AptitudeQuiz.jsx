import React, { useContext } from "react";
import Quiz from "./Quiz";
import aptitudeQuestions from "./aptitude.json";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext

const AptitudeQuiz = () => {
  const { theme } = useContext(ThemeContext); // Access theme

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <Quiz questions={aptitudeQuestions} />
    </div>
  );
};

export default AptitudeQuiz;
