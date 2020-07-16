import React, { useState } from "react";
import firebase from "firebase/app";
import Header from "./Header";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import * as a from './../actions/index';

function Signin(props) {

  let [userFound, toggleUserFound] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () { console.log("Successful.") }).catch(function (error) {
      console.log(error.message)
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log("Successfully signed in!");
    }).then(function () { toggleUserFound(<Redirect to="/" />) }).then(function () {
      const { dispatch } = props
      const action = a.foundUser();
      dispatch(action)
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }


  return (
    <React.Fragment>
      <Header />
      {userFound}
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input type='text'
          name='email'
          placeholder='Enter your email address' />
        <input type='password'
          name='password'
          placeholder='Choose a password.' />
        <button type='submit'>Sign up!!!</button>
      </form>

      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>

      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment >
  );
}
Signin = connect()(Signin)

export default Signin