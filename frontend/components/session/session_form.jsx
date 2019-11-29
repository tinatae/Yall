import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        // this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

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
            <div>
                <h3>Welcome! Please {this.props.formType} below!</h3>

                <form onSubmit={this.handleSubmit}>

                    Or perhaps {this.props.navLink}
                    {this.renderErrors()}

                    <br></br>

                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <br></br>
                    <label>Password:
                        <input type="text" value={this.state.password} onChange={this.update('password')} />
                    </label>

                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
    }
};

export default SessionForm;