import React from 'react';
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            username: '', 
            password: '' 
        };
   
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.showDemo = this.showDemo.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
        };

        this.props.processForm(user);
    };

    showDemo() {
        if (this.props.location.pathname === "/login") {
            return (
              <button id="demo-button" onClick={this.handleDemo}>
                Demo Login
              </button>
            )
        } else { return null };
    }

    handleDemo(e) {
        e.preventDefault();

        const demoUser = {
            username: "Demo",
            password: "123456"
        };

        this.props.processForm(demoUser)
        .then(() => this.props.history.push("/"))
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
          <div className="session-form">
            <img id="icecream" src={window.login1URL} />

            <div id="center-section">
              <div id="thanks">Thanks for joining us here today!</div>
              <div id="pleasethisthat">Please {this.props.formType} below!</div>

              <form onSubmit={this.handleSubmit}>
                <label>
                  username:
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                  />
                </label>

                <label>
                  password:
                  <input
                    type="text"
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
                </label>

                <div className="session-form-button">
                  <input type="submit" value={this.props.formType} />
                </div>

                <div id="or">~ Or ~</div>

                <div className="alt-session-form-button">
                  {this.props.navLink}
                </div>
                  {this.showDemo()}
            
                  {this.renderErrors()}
              </form>
            </div>

            <img id="shotglass" src={window.login2URL} />
          </div>
        );
    }
};

export default withRouter(SessionForm);