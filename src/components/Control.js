import React from 'react';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import SurveyList from './SurveyList';
import AddSurvey from './AddSurvey';
import SurveyDetail from './SurveyDetail';
import Header from './Header';
import * as a from './../actions/index';

class Control extends React.Component {

  // handleAddingNewSurveyToList = () => {
  //   const { dispatch } = this.props;
  //   const action = a.toggleForm();
  //   dispatch(action);
  // }

  handleBackToListClick = () => {
    const { dispatch } = this.props;
    const action = a.selectSurvey(false)
    dispatch(action)
  }

  handleShowingDetailClick = (id) => {
    const { dispatch } = this.props;
    const firestoreSurvey = this.props.firestore.collection('surveys').doc(id)
    let stateSurvey;
    firestoreSurvey.get().then(function (doc) {
      stateSurvey = { ...doc.data(), id: id }
      // console.table(doc.data())
      const action = a.selectSurvey(stateSurvey)
      dispatch(action)
      console.table(stateSurvey)
    })
  }

  render() {
    const auth = this.props.firebase.auth();
    let detailsPage = null;
    let addSurveyForm = null;

    if (this.props.selectedSurvey && (isLoaded(auth)) && (auth.currentUser !== null)) {
      detailsPage = <SurveyDetail survey={this.props.selectedSurvey} onBackToListClick={this.handleBackToListClick} />
    } else if (this.props.selectedSurvey && (isLoaded(auth)) & auth.currentUser === null) {
      detailsPage = <h2>You must be signed in to take surveys.</h2>
    } else if (!this.props.selectedSurvey) {
      detailsPage = "";
    }

    if (this.props.toggleForm && (isLoaded(auth)) && (auth.currentUser !== null)) {
      addSurveyForm = <AddSurvey />
    } else if (this.props.toggleForm && (isLoaded(auth)) && (auth.currentUser === null)) {
      addSurveyForm = <h2>You must be signed in to add surveys.</h2>
    } else if (!this.props.toggleForm) {
      addSurveyForm = "";
    }


    return (
      <React.Fragment>
        <Header />
        <SurveyList onShowDetailsClick={this.handleShowingDetailClick} />
        {addSurveyForm}
        {detailsPage}
      </React.Fragment >
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedSurvey: state.selectedSurvey,
    toggleForm: state.toggleForm
  }
}

Control = connect(mapStateToProps)(Control);

export default withFirestore(Control);