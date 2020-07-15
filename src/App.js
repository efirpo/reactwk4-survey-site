import React from 'react';
import Header from './components/Header';
import Control from './components/Control'
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <Control />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
