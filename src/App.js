import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import MeetingType from './MeetingType';
import RegistrationForm from './RegistrationForm';

class App extends Component {
  constructor() {
    super();
    
    this.baseURL = 'https://api.github.com/repos/lirantal/hirefeed/';
    // bind event handlers
    this.stepNext = this.stepNext.bind(this);
    this.stepReset = this.stepReset.bind(this);
    this.updateRegistration = this.updateRegistration.bind(this);

    this.stateSeed = {
      meetingType: '',
      userName: '',
      userPhone: '',
      userEmail: '',
      steps: ['welcome', 'meetingtype', 'registration'],
      stepsPos: 0
    };

    this.state = Object.assign(
      {},
      this.stateSeed
    );
    
  }
  
  componentWillMount() {
    
    // Grab application identifier based on the URL, stripping the forward slash
    let path = window.location.pathname.substring(1);
    
    // Fetching a dummy URL for now to mock the API request
    fetch(this.baseURL + path)
      .then((res) => {
        console.log(res);
        this.setState({
          organization: {
            name: 'Appi',
            id: 'appi-1232-4917-3898'
          }
        });
      })
      .catch((err) => console.log(err));
  }
  
  stepNext() {
    this.setState({stepsPos: ++this.state.stepsPos});
  }
  
  stepReset() {
    this.setState(this.stateSeed);
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
    
    if (this.state.organization === undefined) {
      return (
        <div className="App">
          Loading...
        </div>
      );
    }
    
    let step = null;
    if (this.state.steps[this.state.stepsPos % this.state.steps.length] === 'welcome') {
      step = <Welcome onClick={this.stepNext} />;
    }
    
    if (this.state.steps[this.state.stepsPos % this.state.steps.length] === 'meetingtype') {
      step = <MeetingType onClick={this.stepNext} updateCallback={this.updateRegistration} />;
    }
    
    if (this.state.steps[this.state.stepsPos % this.state.steps.length] === 'registration') {
      step = <RegistrationForm onClick={this.stepNext} updateCallback={this.updateRegistration} reset={this.stepReset} />;
    }
    
    return (
      <div className="App">

        <div className="container">

          <div className="row">
            <div className="col-lg-12">

              <div className="bs-component">
                <div className="jumbotron">

                  <div>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>{this.state.organization.name}</h1>
                  </div>

                </div>
              </div>

            </div>
          </div>

              <div className="page-header">
              </div>

              {step}

        </div>
      </div>

    );
  }
  
}

export default App;

/*

 <div className="App-header">

 <h2>Welcome to </h2>
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
 */