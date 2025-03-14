import React from "react";
import Quiz from "./Quiz";
import verbalQuestions from "./verbal.json"; // Import specific JSON file

const VerbalQuiz = () => {
  return <Quiz questions={verbalQuestions} />;
};

export default VerbalQuiz;
