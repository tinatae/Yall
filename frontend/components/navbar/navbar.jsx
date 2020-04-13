import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchbarFormContainer from '../searchbar/searchbar_form_container';

const NavBar = ({ currentUser, logout, match: { path, isExact } }) => {
    
    function searchBar() {
        if (path === '/' && isExact === false) {
        return <div><SearchbarFormContainer /></div>
         } else {return null}
    }

    
    const display = currentUser ? (
        <div className="loggednav">
            <div className="nav-left">
                <Link id="add-biz-link" style={{textDecoration: 'none'}} to={"/businesses/new"}>
                    <i className="far fa-building"></i>
                    <span>Add&nbsp;Your&nbsp;Business</span>
                </Link>
                <Link id="add-me-link" style={{ textDecoration: 'none' }} to={"/businesses/new"}>
                    <i className="far fa-sun"></i>
                    <span>Add Me</span>
                </Link>
            </div>

            {searchBar()}

            <div className="loggednav-right">
                <div className="greeting">
                    <div id="hello">Hello, </div>
                    <div id="username"> {currentUser.username}</div>
                    <button className="logout" onClick={logout}>Log&nbsp;Out</button>              
                </div>
            </div>
        </div >
    ) : (
        <div className="notlogged-nav">
            <div className="nav-left">
                <Link id="add-biz-link" style={{ textDecoration: 'none' }} to={"/businesses/new"}>
                    <i className="far fa-building"></i>
                    <span>Add&nbsp;Your&nbsp;Business</span>
                </Link>
                <Link id="add-me-link" style={{ textDecoration: 'none' }} to={"/businesses/new"}>
                    <i className="far fa-sun"></i>
                    <span>Add Me</span>
                </Link>
            </div>

            {searchBar()}
               
            <div className="notlogged-right">
           
                    <div id="navlink-login">
                        <Link style={{textDecoration: 'none'}} to={"/login"}>              
                            <span>Log In</span>               
                        </Link>
                    </div>
                    <div id="navlink-signup">
                        <Link style={{textDecoration: 'none'}} to={"/signup"}>           
                            <span>Sign Up</span>    
                        </Link>
                    </div>
            
            </div>
        </div>
        );

    
    const backgroundStyle = path === '/' && isExact === true ? { backgroundColor: 'transparent' } : {backgroundColor: '#FF003C'}

    const navbarStyles = {
        ...backgroundStyle
    }

    const hideLogo = path === '/' && isExact === true ? (<div id="blank-top"> </div>) : (
        <Link style={{ textDecoration: "none" }} to={"/"} >
            <div className="yallr-name">
                y allr
                <i className="far fa-snowflake"></i>
            </div>
        </Link >
    )

    return (
      <div>
        <header>
          <div style={navbarStyles} className="navbar">
            {hideLogo}
       
            {display}
          </div>
        </header>
      </div>
    );
};

export default withRouter(NavBar);