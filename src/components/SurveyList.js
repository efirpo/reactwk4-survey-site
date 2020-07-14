import React from 'react';
import Survey from './Survey';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import * as a from './../actions/ActionTypes';

function SurveyList(props) {

  useFirestoreConnect([{
    collection: 'surveys'
  }]);

  const surveys = useSelector(state => state.firestore.ordered.surveys)

  // let surveySelectedFromLocal = null;

  // function handleShowingDetailsClick (id) {
  //  surveySelectedFromLocal = surveys.filter(survey => survey.id == id)[0] 
  // }

  // if (surveySelectdFromLocal){

  // }
  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        <div className="list">
          {surveys.map((survey) => {
            return <Survey
              name={survey.name}
              bookTitle={survey.bookTitle}
              bookAuthor={survey.bookAuthor}
              question1={survey.question1}
              question2={survey.question2}
              question3={survey.question3}
              question4={survey.question4}
              question5={survey.question5}
              id={survey.id}
              key={survey.id}
              onShowDetailsClick={props.onShowDetailsClick} />
          })}
        </div>
      </React.Fragment>
    )
  }
  else {
    return (
      <h2> Loading...</h2>
    )
  }
}

export default SurveyList;