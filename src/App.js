import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import MeetingType from './MeetingType';
import RegistrationForm from './RegistrationForm';

class App extends Component {
  constructor() {
    super();
    
    // bind event handlers
    this.stepNext = this.stepNext.bind(this);
    this.stepReset = this.stepReset.bind(this);
    this.updateRegistration = this.updateRegistration.bind(this);

    this.state = {
      organization: {
        name: 'Appi',
        id: '1'
      },
      meetingType: '',
      userName: '',
      userPhone: '',
      userEmail: '',
      steps: ['welcome', 'meetingtype', 'registration'],
      stepsPos: 0
    };
    
  }
  
  stepNext() {
    this.setState({stepsPos: ++this.state.stepsPos});
  }
  
  stepReset() {
    this.setState({stepsPos: 0, registration: this.registration});
  }
  
  updateRegistration(key, val) {
    let obj = {};
    if (typeof key === 'object') {
      this.setState(key);
    } else {
      obj[key] = val;
    }

    this.setState(obj);
  }
  
  render() {
    let step = null;
    if (this.state.steps[this.state.stepsPos % this.state.steps.length] === 'welcome') {
      step = <Welcome onClick={this.stepNext} />;
    }
    
    if (this.state.steps[this.state.stepsPos % this.state.steps.length] === 'meetingtype') {
      step = <MeetingType onClick={this.stepNext} updateCallback={this.updateRegistration} />;
    }
    
    if (this.state.steps[this.state.stepsPos % this.state.steps.length] === 'registration') {
      step = <RegistrationForm onClick={this.stepNext} updateCallback={this.updateRegistration} />;
    }
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {this.state.organization.name}</h2>
        </div>
        
        <div>
          <p>
            {this.state.steps}
          </p>
          <p>
            {this.state.stepsPos}
          </p>
        </div>
      
        {step}
        
        <button onClick={this.stepReset}> Reset </button>
        
        <p> debug the state: {JSON.stringify(this.state)}</p>
      </div>
    );
  }
  
}

export default App;
