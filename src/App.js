import React, { Component } from "react";
import { connect } from 'react-redux';
import { itemsRequest } from './actions/Action';
import UserList from "./UserList";

class App extends Component{
  

  
  render(){
  const { appName, desc, itemsRequest } = this.props;

  return (
    
    <div>
      <h1>{ appName }</h1>
      <h5>{ desc }</h5>
    <button onClick={itemsRequest}>Item Request</button>
    <UserList></UserList>
    </div>

  );
  }
}

const mapStateToProps = (state) => {
  return {
    appName: state.appName,
    desc: state.desc
  };
 };
 const mapDispatchToProps = (dispatch) => {
  return {
    itemsRequest: () => dispatch(itemsRequest())
  };
 };



export default connect(mapStateToProps, mapDispatchToProps)(App);

