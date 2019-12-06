import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="loggednav">
            <div className="loggednav-left">
                <Link to="/businesses">
                    <button>
                        <div>y allr</div>
                    </button>
                </Link>
                <Link to="/businesses/new">
                    <button>
                        <div>Add Your Business</div>
                    </button>
                </Link>
            </div>

            <div className="loggednav-right">
                <div className="greeting">
                    <span id="hello">Hello, </span>
                    <span id="username">{currentUser.username}</span>
                </div>
                <div>
                    <button onClick={logout}>Log Out</button>
                </div>
            </div>
        </div >
    ) : (
        <div className="notlogged-nav">
            <div className="notlogged-left">
                <Link to ="/businesses">
                    <button>
                        <div>y allr</div>
                    </button>
                </Link>
                <Link to="/businesses">
                    <button>
                        <div>Add Your Business</div>
                    </button>
                </Link>
            </div>

            <div className="notlogged-right">
                <div>
                    <Link to="/login">
                        <button>
                            Log In
                        </button>
                    </Link>
                </div>
                <div>
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
            <div>{display}</div>
        </header>
    );
};

