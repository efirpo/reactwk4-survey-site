import React from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import SurveyList from './SurveyList';
import AddSurvey from './AddSurvey';

function Control() {

  // handleAddingNewSurveyToList = () => {
  //   const { dispatch } = this.props;
  //   const action = a.toggleFoprm();
  //   dispatch(action);
  // }

  let detailsPage;
  return (
    <React.Fragment>
      <SurveyList />
      <AddSurvey />
      {detailsPage}
    </React.Fragment>
  )
}

Control = connect()(Control);

export default withFirestore(Control);