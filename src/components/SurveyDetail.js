import React from 'react';

function SurveyDetail(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <p><em>{props.title}</em>, {props.author}</p>
      <ul>Survey Questions:
        <li>{props.question1}</li>
        <li>{props.question2}</li>
        <li>{props.question3}</li>
        <li>{props.question4}</li>
        <li>{props.question5}</li>
      </ul>
    </React.Fragment>
  )
}

export default SurveyDetail;