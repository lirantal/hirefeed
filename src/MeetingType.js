import React, { Component } from 'react'

class MeetingType extends Component {
    
    constructor() {
        super();
        this.state = {
            meetingType: 'meeting'
        };
        
        this.updateType = this.updateType.bind(this);
    }
    
    updateType(e) {
        this.setState({meetingType: e.target.value});
        this.props.updateCallback('meetingType', e.target.value);
        this.props.onClick();
    }
    
    render() {
        return (

        <div className="row">

          <div className="col-md-6">

            <div className="bs-component" onClick={this.updateType}>
              <div className="jumbotron">

                <p>I'm here for a meeting</p>
                <p><button className="btn btn-primary btn-lg" value="meeting" >Meeting</button></p>

              </div>
            </div>

          </div>

          <div className="col-md-6" onClick={this.updateType}>

            <div className="bs-component">
              <div className="jumbotron">

                <p>I'm here for an interview</p>
                <p><button className="btn btn-primary btn-lg" value="interview" >Interview</button></p>

              </div>
            </div>

          </div>

        </div>


        );
    }
}

export default MeetingType;