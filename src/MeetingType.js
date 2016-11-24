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
    }
    
    render() {
        return (
            <div>
                <button value="meeting" className="MeetingType" onClick={this.updateType}> Meeting </button>
                <button value="interview" className="MeetingType" onClick={this.updateType}> Interview </button>
                <div>
                    <p><span>{JSON.stringify(this.state)}</span></p>
                </div>
                <button onClick={this.props.onClick}> Next </button>

            </div>
        );
    }
}

export default MeetingType;