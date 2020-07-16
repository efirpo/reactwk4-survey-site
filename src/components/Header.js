import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as a from "./../actions/index"
import firebase from 'firebase/app';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  handleShowFormClick = () => {
    console.table(this.props)
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action)
  }

  doSignOut = () => {
    firebase.auth().signOut().then(function () {
      console.log("Sign out successful!")
    }).catch(function (error) {
      console.log(error.message);
    });
    if (this.props.toggleForm) {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action)
    }
  }
  render() {
    const auth = this.props.firebase.auth();
    let loginButton = null;

    if ((isLoaded(auth)) && (auth.currentUser !== null)) {
      console.log("signed in");
      loginButton = <span onClick={this.doSignOut}>Sign Out</span>

    } else if ((isLoaded(auth)) && (auth.currentUser === null)) {
      console.log("signed out");
      loginButton = <span><Link to="/signin">Sign in/Sign up</Link></span>
    }
    return (
      <React.Fragment>
        <h1>BOOK SURVEEEYYYYYYYSSS</h1>
        <span><Link to="/">Survey List</Link></span> <span>| </span>{loginButton}<span> | </span><span onClick={this.handleShowFormClick}>Add a Survey</span>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    toggleForm: state.toggleForm
  }
}

Header = connect(mapStateToProps)(Header)

export default withFirestore(Header);