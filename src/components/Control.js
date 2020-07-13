import React from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

function Control() {


  return (
    <React.Fragment>
      <SurveyList />
      {detailsPage}
    </React.Fragment>
  )

}

Control = connect()(Control);

export default withFirestore(Control);