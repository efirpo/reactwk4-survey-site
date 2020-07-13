import React from 'react';

function SurveyDetail(props) {
  return (
    <React.Fragment>
      <h1>{props.survey.name}</h1>
      <p><em>{props.survey.title}</em>, {props.survey.author}</p>
      <ul>Survey Questions:
        <li>{props.survey.question1}</li>
        <li>{props.survey.question2}</li>
        <li>{props.survey.question3}</li>
        <li>{props.survey.question4}</li>
        <li>{props.survey.question5}</li>
      </ul>
    </React.Fragment>
  )
}

export default SurveyDetail;