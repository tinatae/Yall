import React from 'react';
import { Link } from 'react-router-dom';
// import SearchbarForm from '../searchbar/searchbar_form';

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
                <Link style={{textDecoration: 'none'}} to="/businesses/new">
                    <span>Add Your Business</span>    
                </Link>
            </div>

            <div className="notlogged-right">
                <div id="navlink">
                    <div id="navlink-login">
                        <Link style={{textDecoration: 'none'}} to="/login">              
                            <span>Log In</span>               
                        </Link>
                    </div>
                    <div id="navlink-signup">
                        <Link style={{textDecoration: 'none'}} to="/signup">           
                            <span>Sign Up</span>    
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        );

    return (
        <header>
            <div className="navbar">
                <Link style={{textDecoration: 'none'}} to="/">
                    <div className="yallr-name">y allr</div>
                </Link>
                {display}
            </div>
        </header>
    );
};

  {/* <SearchbarForm 
        changeFilter={changeFilter} /> */}