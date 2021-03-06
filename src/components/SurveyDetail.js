import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import * as a from './../actions/index'
import firebase from 'firebase/app';

function SurveyDetail(props) {

  const firestore = useFirestore();
  let [q1response, q1Change] = useState(0);
  let [q2response, q2Change] = useState(0);
  let [q3response, q3Change] = useState(0);
  let [q4response, q4Change] = useState(0);
  let [q5response, q5Change] = useState(0);

  let user;
  let auth;
  let id = props.survey.id
  // let userSurveyDeets = {
  //   id
  // }
  if (props.foundUser) {
    auth = firebase.auth()
    user = auth.currentUser
  }
  async function handleSurveySubmission(event) {
    event.preventDefault();
    let numberOfResponses;
    numberOfResponses = await firestore.collection('surveys').doc(props.survey.id).collection('responses').get()
      .then(snap => { return snap.size })
      .then(firestore.collection('surveys').doc(props.survey.id).collection('responses').add({
        q1response: q1response,
        q2response: q2response,
        q3response: q3response,
        q4response: q4response,
        q5response: q5response
      }))
    // .then(firestore.collection('users').doc(user.uid).set({
    //   "surveys": [...firestore.collection('users').doc(user.uid), props.survey.id]
    // }))
    handleAveragesMath(numberOfResponses)
    handleAddSurveyId(props.survey.id)
  }

  function handleAddSurveyId(survey) {
    thisUser = firestore.collection('users').doc(user.uid).get().then(function (doc) {
      storeUser = {
        ...doc.data(), surveys: [...doc.data.surveys, survey]

      }
    })
    let storeUser;
  }

  function handleAveragesMath(numberOfResponses) {
    firestore.collection('surveys').doc(props.survey.id).set({
      ...props.survey,
      q1average: ((props.survey.q1average * (numberOfResponses - 1)) + q1response) / numberOfResponses,
      q2average: ((props.survey.q2average * (numberOfResponses - 1)) + q2response) / numberOfResponses,
      q3average: ((props.survey.q3average * (numberOfResponses - 1)) + q3response) / numberOfResponses,
      q4average: ((props.survey.q4average * (numberOfResponses - 1)) + q4response) / numberOfResponses,
      q5average: ((props.survey.q5average * (numberOfResponses - 1)) + q5response) / numberOfResponses
      //((0 /1)
    })
    props.onBackToListClick()


  }

  function handleResponseChange(event) {
    console.log(props)
    if (event.target.name === "question1") {
      q1Change(q1response = parseInt(event.target.value));
    } else if (event.target.name === "question2") {
      q2Change(q2response = parseInt(event.target.value))
    } else if (event.target.name === "question3") {
      q3Change(q3response = parseInt(event.target.value))
    } else if (event.target.name === "question4") {
      q4Change(q4response = parseInt(event.target.value))
    } else if (event.target.name === "question5") {
      q5Change(q5response = parseInt(event.target.value))
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

//Ideally, surveyDetail render should show survey questions if user has never taken specified survey
//if they have already taken it, it should show averages of all responses
//when 'user' is created, start with {surveysTaken: [], surveysCreated: []}
//When user takes survey:
//if(firestore.collection('users').doc(userId).collection('surveys').doc(surveyId)) {
  // showAverages = firestore.collection(surveys).doc(surveyId.averageScores)
//  }
//  surveysTaken.value.push(props.survey.id)
//})
//render method checks surveysTaken.value.contains(props.survey.id)
//When user creates survey:
//('users').doc.update({
//   surveysCreated.value.push
// })

// 