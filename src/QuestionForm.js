import React, { useState } from "react";
import "./QuestionForm.css";
import firebase from "firebase";

function QuestionForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(0);

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("questions")
      .add({
        question,
        answer: parseInt(answer)
      })
      .then(() => {
        setQuestion('');
        setAnswer('');
      })
  }

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label className="row">
        <span>Question:</span>
        <input
          name="question"
          type="text"
          value={question}
          onChange={e => setQuestion(e.currentTarget.value)}
        />
      </label>
      <label className="row">
        <span>Answer:</span>
        <input
          name="answer"
          type="number"
          value={answer}
          onChange={e => setAnswer(e.currentTarget.value)}
        />
      </label>
      <button className="submit" type="submit">
        <span>Submit</span>
      </button>
    </form>
  );
}

export default QuestionForm;
