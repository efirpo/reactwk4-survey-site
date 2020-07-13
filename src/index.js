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

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
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
