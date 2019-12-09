import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="loggednav">
            <div className="loggednav-left">
                <Link to="/businesses/new">
                    <button>
                        <div>Add Your Business</div>
                    </button>
                </Link>
            </div>

            <div className="loggednav-right">
                <div className="greeting">
                    <div id="hello">Hello, </div>
                    <div id="username"> {currentUser.username}</div>
                   
                        <button onClick={logout}>Log&nbsp;Out</button>
                  
                </div>
            </div>
        </div >
    ) : (
        <div className="notlogged-nav">
            <div className="notlogged-left">
                <Link to="/businesses/new">
                    <button>
                        <div>Add Your Business</div>
                    </button>
                </Link>
            </div>

            <div className="notlogged-right">
                <div id="navlink">
                    <Link to="/login">
                        <button>
                            Log In
                        </button>
                    </Link>
                </div>
                <div id="navlink">
                    <Link to="/signup">
                        <button>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        );

    return (
        <header>
            <div className="navbar">
                <Link style={{textDecoration: 'none'}} to="/businesses">
                    <div className="yallr-name">y allr</div>
                </Link>
                {display}
            </div>
        </header>
    );
};

