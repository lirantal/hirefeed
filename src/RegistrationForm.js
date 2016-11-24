import React, { Component } from 'react'

class RegistrationForm extends Component {
    
    constructor() {
        super();
        this.style =  {
            margin: 5
        }
        
        this.state = {
            userName: '',
            userPhone: '',
            userEmail: ''
        }
        
        this.updateForm = this.updateForm.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }
    
    updateForm() {
        this.props.updateCallback({
            userName: this.state.userName,
            userEmail: this.state.userEmail,
            userPhone: this.state.userPhone
        });
    }
    
    onNameChange(event) {
        this.setState({userName: event.target.value});
    }
    
    onPhoneChange(event) {
        this.setState({userPhone: event.target.value});
    }
    
    onEmailChange(event) {
        this.setState({userEmail: event.target.value});
    }
    
    render() {
        return (
            <div className="form">
                Name:
                <input style={this.style} type="text" name="name" placeholder="Full name"
                    value={this.state.userName} onChange={this.onNameChange} />
                Email:
                <input style={this.style} type="text" name="email" placeholder="Email address"
                    value={this.state.userEmail} onChange={this.onEmailChange} />
                Phone:
                <input style={this.style} type="tel" name="phone" placeholder="Phone number"
                    value={this.state.userPhone} onChange={this.onPhoneChange} />
                    
                <button onClick={this.updateForm} > Submit </button>
                
                <p>{JSON.stringify(this.state)}</p>
            </div>
        );
    }
}

export default RegistrationForm;