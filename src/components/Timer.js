import React, { Component } from 'react';
import { clearAuth } from '../actions/auth';
import store from '../store';

export default class Timer extends Component {
 
  componentWillReceiveProps(nextProps) {
    console.log('NEXT PROPS:', nextProps)
  }

  render(){
    console.log()
    console.log('STORE:', store.getState());
    console.log('user:', store.getState().auth.currentUser);
    

    function logOut() {
      // this.dispatch(clearAuth());
      console.log('am I being logged out?')
    }

    // if(user isn't null) {set the event listener}
    window.addEventListener('mousemove', () => setTimeout(logOut(), 5000))

    return(
      <div>
      </div>
    );
  }
}