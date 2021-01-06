import '../assets/css/main.css';
import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

//Store
import {fetchCurrentUser} from '../store/actions/currentUserActions'



// Components
import HeaderNav from './HeaderNav'
import {Button} from "./Button"

const HomePage = (props) => {

  return (
    <div>
      <HeaderNav/>
      <h1> this is app</h1>
      


      {/* <Button title="Click me" type="primary" onClick={() => {
      console.log("Click")
      }} size="large"/>
      <Button title="Click me" type="primary" onClick={() => {
      console.log("Click")
      }}/>
      <Button title="Click me" type="primary" onClick={() => {
      console.log("Click")
      }} size="small"/> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.combineReducers
  }
}

export default connect(mapStateToProps, {
  fetchCurrentUser
})(HomePage);