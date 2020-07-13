import React from 'react';

function Survey(props) {
  return (
    <React.Fragment>
      <div>
        {props.name}<br />
        {props.title}<br />
        {props.author}<br />
      </div>
    </React.Fragment>
  )
}

export default Survey;