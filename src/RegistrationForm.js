import React, { Component } from 'react'

class RegistrationForm extends Component {
    
    constructor() {
        super();

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
          <div className="row">
              <div className="col-lg-12">

                  <form className="form-horizontal">
                      <fieldset>

                          <legend>
                              Register
                          </legend>

                          <div className="form-group">
                              <label htmlFor="inputName" className="col-lg-2 control-label">Name</label>
                              <div className="col-lg-10">
                                  <input name="name" type="text" className="form-control" placeholder="Name"
                                         value={this.state.userName} onChange={this.onNameChange} />
                              </div>
                          </div>

                          <div className="form-group">
                              <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                              <div className="col-lg-10">
                                  <input name="email" type="text" className="form-control" placeholder="Email"
                                         value={this.state.userEmail} onChange={this.onEmailChange} />
                              </div>
                          </div>

                          <div className="form-group">
                              <label htmlFor="inputPhone" className="col-lg-2 control-label">Phone</label>
                              <div className="col-lg-10">
                                  <input name="phone" type="text" className="form-control" placeholder="Phone"
                                         value={this.state.userPhone} onChange={this.onPhoneChange} />
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="col-lg-10 col-lg-offset-2">
                                  <button type="reset" className="btn btn-default" onClick={this.props.reset}>Cancel</button>
                                  <button type="submit" className="btn btn-primary" onClick={this.updateForm}>Submit</button>
                              </div>
                          </div>

                      </fieldset>
                  </form>

              </div>
          </div>
        );
    }
}

export default RegistrationForm;