import React from "react";
import "./App.css";
import Question from './Question';
import QuestionForm from "./QuestionForm";
import packageJson from '../package.json';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h1 className="App-title">Guesstimate</h1>
        <QuestionForm />
        <Question />
      </div>
      <span className="version">v.{packageJson.version}</span>
    </div>
  );
}

export default App;
