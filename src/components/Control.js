import React from 'react';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import SurveyList from './SurveyList';
import AddSurvey from './AddSurvey';
import SurveyDetail from './SurveyDetail';
import * as a from './../actions/index';

class Control extends React.Component {

  // handleAddingNewSurveyToList = () => {
  //   const { dispatch } = this.props;
  //   const action = a.toggleForm();
  //   dispatch(action);
  // }

  handleBackToListClick = () => {
    const { dispatch } = this.props;
    const action = a.selectSurvey({})
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
    })
    // get({
    //   collection: 'surveys', doc: id
    // }).then((survey) => {
    //   const firestoreSurvey = {
    //     name: survey.get('name'),
    //     title: survey.get('bookTitle'),
    //     author: survey.get('bookAuthor'),
    //     question1: survey.get('question1'),
    //     question2: survey.get('question2'),
    //     question3: survey.get('question3'),
    //     question4: survey.get('question4'),
    //     question5: survey.get('question5'),
    //     id: survey.get('id')
    //   }

    // })
  }
  render() {

    let detailsPage = null;

    if (this.props.selectedSurvey) {
      detailsPage = <SurveyDetail survey={this.props.selectedSurvey} onBackToListClick={this.handleBackToListClick} />
    }

    return (
      <React.Fragment>
        <SurveyList onShowDetailsClick={this.handleShowingDetailClick} />
        <AddSurvey />
        {detailsPage}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedSurvey: state.selectedSurvey
  }
}

Control = connect(mapStateToProps)(Control);

export default withFirestore(Control);