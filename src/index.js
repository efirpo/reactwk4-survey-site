import React from 'react';
import ReactDOM from 'react-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from "./firebase";
import App from './App';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';
import 'firebase/auth';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
    surveys: 'surveys'
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
