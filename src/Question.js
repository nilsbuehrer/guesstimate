import React, { useState, useEffect } from "react";
import "./Question.css";
import firebase from "firebase";

function useQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("questions")
      .onSnapshot(snapshot => {
        const newQuestions = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setQuestions(newQuestions);
      });

      return () => unsubscribe;
  }, []);

  return questions;
}

function Question() {
  const questions = useQuestions();

  return (
    <ol>
      {questions.map(question => (
        <li key={question.id}>
          <div>{question.question}</div>
          <div>{question.answer}</div>
        </li>
      ))}
    </ol>
  );
}

export default Question;
