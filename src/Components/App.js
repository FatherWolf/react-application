import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  render() {
    return <div>test</div>;
  }
}
export default connect(null, {
  getUsersRequest
})(App);



//notes
// runs yield and any code in between 
// then when it hits the fourth next there is not a corrisponding yield. Causing it to end and show done = true in console.

  //while true loops through as long as it hits true

//run app / fire getusersrequest / sagas users takeevery request / then act upon with worker request called get users/ call api to get users then log result steps 
