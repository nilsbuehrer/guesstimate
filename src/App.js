import React from "react";
import "./App.css";
import QuestionForm from "./QuestionForm";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h1 className="App-title">Guesstimate</h1>
        <QuestionForm />
      </div>
    </div>
  );
}

export default App;
