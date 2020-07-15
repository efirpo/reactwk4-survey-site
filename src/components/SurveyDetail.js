import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import * as a from './../actions/index'

function SurveyDetail(props) {

  const firestore = useFirestore();
  let [q1response, q1Change] = useState(0);
  let [q2response, q2Change] = useState(0);
  let [q3response, q3Change] = useState(0);
  let [q4response, q4Change] = useState(0);
  let [q5response, q5Change] = useState(0);



  async function handleSurveySubmission(event) {
    event.preventDefault();
    let numberOfResponses;
    numberOfResponses = await firestore.collection('surveys').doc(props.survey.id).collection('responses').get()
      .then(snap => { return snap.size })
      .then(firestore.collection('surveys').doc(props.survey.id).collection('responses').add({
        q1response: parseInt(q1response),
        q2response: parseInt(q2response),
        q3response: parseInt(q3response),
        q4response: parseInt(q4response),
        q5response: parseInt(q5response)
      }))
    handleAveragesMath(numberOfResponses)
  }

  function handleAveragesMath(numberOfResponses) {
    console.log("number of Responses: " + numberOfResponses)
    console.log("props.survey.q1average: " + props.survey.q1average)
    console.log("q1response: " + q1response)
    firestore.collection('surveys').doc(props.survey.id).set({
      ...props.survey,
      q1average: ((props.survey.q1average * (numberOfResponses - 1)) + parseInt(q1response)) / numberOfResponses,
      q2average: ((props.survey.q2average * (numberOfResponses - 1)) + parseInt(q2response)) / numberOfResponses,
      q3average: ((props.survey.q3average * (numberOfResponses - 1)) + parseInt(q3response)) / numberOfResponses,
      q4average: ((props.survey.q4average * (numberOfResponses - 1)) + parseInt(q4response)) / numberOfResponses,
      q5average: ((props.survey.q5average * (numberOfResponses - 1)) + parseInt(q5response)) / numberOfResponses
      //((0 /1)
    })
    console.log("THE MATH: " + ((1 * (2 - 1)) + 4) / 2)
    console.log("Math without division: " + ((props.survey.q1average * (numberOfResponses - 1)) + q1response))
    props.onBackToListClick()


  }

  function handleResponseChange(event) {
    if (event.target.name === "question1") {
      q1Change(q1response = event.target.value);
    } else if (event.target.name === "question2") {
      q2Change(q2response = event.target.value)
    } else if (event.target.name === "question3") {
      q3Change(q3response = event.target.value)
    } else if (event.target.name === "question4") {
      q4Change(q4response = event.target.value)
    } else if (event.target.name === "question5") {
      q5Change(q5response = event.target.value)
    }
  }

  return (
    <React.Fragment>
      <h1>{props.survey.name}</h1>
      <p><em>{props.survey.bookTitle}</em>, {props.survey.bookAuthor}</p>
      <form onSubmit={handleSurveySubmission}>
        <label>{props.survey.question1}</label>
        <select name="question1" onChange={handleResponseChange}>
          <option value="0"></option>
          <option value="1">Highly Agree</option>
          <option value="2">Agree</option>
          <option value="3">Neutral</option>
          <option value="4">Disagree</option>
          <option value="5">Highly Disagree</option>
        </select>
        <label>{props.survey.question2}</label>
        <select name="question2" onChange={handleResponseChange}>
          <option value="0"></option>
          <option value="1">Highly Agree</option>
          <option value="2">Agree</option>
          <option value="3">Neutral</option>
          <option value="4">Disagree</option>
          <option value="5">Highly Disagree</option>
        </select>
        <label>{props.survey.question3}</label>
        <select name="question3" onChange={handleResponseChange}>
          <option value="0"></option>
          <option value="1">Highly Agree</option>
          <option value="2">Agree</option>
          <option value="3">Neutral</option>
          <option value="4">Disagree</option>
          <option value="5">Highly Disagree</option>
        </select>
        <label>{props.survey.question4}</label>
        <select name="question4" onChange={handleResponseChange}>
          <option value="0"></option>
          <option value="1">Highly Agree</option>
          <option value="2">Agree</option>
          <option value="3">Neutral</option>
          <option value="4">Disagree</option>
          <option value="5">Highly Disagree</option>
        </select>
        <label>{props.survey.question5}</label>
        <select name="question5" onChange={handleResponseChange}>
          <option value="0"></option>
          <option value="1">Highly Agree</option>
          <option value="2">Agree</option>
          <option value="3">Neutral</option>
          <option value="4">Disagree</option>
          <option value="5">Highly Disagree</option>
        </select>
        <button type="submit">Submit results!</button>

      </form>
      <ul>Survey Questions:
        <li>{props.survey.question1}</li>
        <li>{props.survey.question2}</li>
        <li>{props.survey.question3}</li>
        <li>{props.survey.question4}</li>
        <li>{props.survey.question5}</li>
      </ul>
      <button onClick={props.onBackToListClick}>Hide Detail</button>
    </React.Fragment >
  )
}

export default SurveyDetail;

