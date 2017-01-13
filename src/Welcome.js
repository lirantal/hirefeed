import React, { Component }  from 'react'

class Welcome extends Component {
 render() {
    return (

      <div className="row">
        <div className="col-lg-12">

          <div className="bs-component">
            <div className="jumbotron">

              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <p><a className="btn btn-primary btn-lg" onClick={this.props.onClick}>Check-in!</a></p>

            </div>
          </div>

        </div>
      </div>

    );
 }
}

export default Welcome;