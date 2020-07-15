import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import SurveyForm from './SurveyForm';

function AddSurvey() {
  const firestore = useFirestore();

  function addSurveyToFirestore(event) {
    event.preventDefault();
    console.log("Add survey");
    console.log("Vals: ", event.target.name.value);
    return firestore.collection('surveys').add({
      name: event.target.name.value,
      bookTitle: event.target.bookTitle.value,
      bookAuthor: event.target.bookAuthor.value,
      question1: event.target.question1.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,
      question4: event.target.question4.value,
      question5: event.target.question5.value,
      q1average: 0,
      q2average: 0,
      q3average: 0,
      q4average: 0,
      q5average: 0
    })
  }
  return (
    <React.Fragment>
      <SurveyForm submitHandler={addSurveyToFirestore} buttonText="Add Survey" />
    </React.Fragment>
  );
}

export default AddSurvey;