import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import selectSurveyReducer from './select-survey-reducer';


const rootReducer = combineReducers({
  firestore: firestoreReducer,
  selectedSurvey: selectSurveyReducer
})

export default rootReducer;