import React, { Component }  from 'react'

class Welcome extends Component {
 render() {
    return (
        <div className="App-welcome" onClick={this.props.onClick}>
            <p className="App-intro">
              <button> Let's Sign-Up! </button>
            </p>
        </div>
    );
 }
}

export default Welcome;