import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import selectSurveyReducer from './select-survey-reducer';
import toggleFormReducer from './toggle-form-reducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  selectedSurvey: selectSurveyReducer,
  toggleForm: toggleFormReducer
})

export default rootReducer;