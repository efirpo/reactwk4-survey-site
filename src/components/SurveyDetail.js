import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';

function SurveyDetail(props) {

  const firestore = useFirestore();
  let [q1response, q1Change] = useState(0);
  let [q2response, q2Change] = useState(0);
  let [q3response, q3Change] = useState(0);
  let [q4response, q4Change] = useState(0);
  let [q5response, q5Change] = useState(0);

  function handleSurveySubmission(event) {
    event.preventDefault();
    let numberOfResponses = firestore.collection('surveys').doc(props.survey.id).collection('responses').get().then(snap => { return snap.size })
    console.log(numberOfResponses)
    firestore.collection('surveys').doc(props.survey.id).collection('responses').add({
      q1response: q1response,
      q2response: q2response,
      q3response: q3response,
      q4response: q4response,
      q5response: q5response
    })
    // firestore.collection('surveys').doc(props.survey.id).update({
    //   q1average: { totalresponsesHere } + 1 / q1average * totalresponsesHere + q1response,
    //   q2average: ,
    //   q3average: ,
    //   q4average: ,
    //   q5average: ,
    //   surveyTakersNum: surveyTakersNum + 1
    // })
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
          <option value="1">Highly Agree</option>
          <option value="2">Agree</option>
          <option value="3">Neutral</option>
          <option value="4">Disagree</option>
          <option value="5">Highly Disagree</option>
        </select>
        <label>{props.survey.question2}</label>
        <select name="question2" value="" onChange={handleResponseChange}>
          <option value="1">Highly Agree</option>
          <option value="2">Agree</option>
          <option value="3">Neutral</option>
          <option value="4">Disagree</option>
          <option value="5">Highly Disagree</option>
        </select>
        <label>{props.survey.question3}</label>
        <select name="question3" value="" onChange={handleResponseChange}>
          <option value="1">Highly Agree</option>
          <option value="2">Agree</option>
          <option value="3">Neutral</option>
          <option value="4">Disagree</option>
          <option value="5">Highly Disagree</option>
        </select>
        <label>{props.survey.question4}</label>
        <select name="question4" value="" onChange={handleResponseChange}>
          <option value="1">Highly Agree</option>
          <option value="2">Agree</option>
          <option value="3">Neutral</option>
          <option value="4">Disagree</option>
          <option value="5">Highly Disagree</option>
        </select>
        <label>{props.survey.question5}</label>
        <select name="question5" value="" onChange={handleResponseChange}>
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

