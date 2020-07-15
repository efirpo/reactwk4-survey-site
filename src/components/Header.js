import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as a from "./../actions/index"

function Header(props) {

  function handleShowFormClick(event) {

    const { dispatch } = props;
    const action = a.toggleForm();
    dispatch(action)
  }

  return (
    <React.Fragment>
      <h1>BOOK SURVEEEYYYYYYYSSS</h1>
      <span><Link to="/">Survey List</Link></span> <span>| </span><span><Link to="/signin">Sign in/Sign up</Link></span><span> | </span><span onClick={handleShowFormClick}>Add a Survey</span>
    </React.Fragment>
  )
}

Header = connect()(Header)

export default Header;