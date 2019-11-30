import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="greeting">
            <span id="hello">Hello, </span> 
            <span id="username">{currentUser.username}</span>
            <br/>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <div>
                <Link className="button" to="/signup">Sign Up</Link>
                <br></br>
                <Link className="button" to="/login">Log In</Link>
            </div>
        );

    return (
        <header>
            <div>{display}</div>
        </header>
    );
};
