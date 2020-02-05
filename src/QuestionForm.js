import React from "react";
import "./QuestionForm.css";
import firebase from "firebase";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const db = firebase.firestore();

    db.collection("questions")
      .add({
        question: this.state.question,
        answer: this.state.answer
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    alert("A name was submitted: " + this.state.question + this.state.answer);
    event.preventDefault();
  }

  render() {
    return (
      <form class="form-container" onSubmit={this.handleSubmit}>
        <label class="row">
          <span>Question:</span>
          <input
            name="question"
            type="text"
            value={this.state.question}
            onChange={this.handleInputChange}
          />
        </label>
        <label class="row">
          <span>Answer:</span>
          <input
            name="answer"
            type="number"
            value={this.state.answer}
            onChange={this.handleInputChange}
          />
        </label>
        <button class="submit" type="submit">
          <span>Submit</span>
        </button>
      </form>
    );
  }
}

export default QuestionForm;
