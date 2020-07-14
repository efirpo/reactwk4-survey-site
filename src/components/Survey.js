import React from 'react';

function Survey(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.onShowDetailsClick(props.id)}>
        <h4>{props.name}</h4>
        <p><em>{props.bookTitle}</em>, {props.bookAuthor}</p>
      </div>
    </React.Fragment>
  )
}

export default Survey;