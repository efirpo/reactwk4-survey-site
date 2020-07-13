import React from 'react';
import Survey from './Survey';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function SurveyList(props) {

  useFirestoreConnect([{
    collection: 'surveys'
  }]);

  const surveys = useSelector(state => state.firestore.ordered.surveys)
  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        <div className="list">
          {surveys.map((survey) => {
            return <Survey
              name={survey.name}
              title={survey.bookTitle}
              author={survey.bookAuthor}
              question1={survey.question1}
              question2={survey.question2}
              question3={survey.question3}
              question4={survey.question4}
              question5={survey.question5}
              id={survey.id}
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