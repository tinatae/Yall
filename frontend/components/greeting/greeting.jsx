import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) : (
            <div className='header'>
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
