import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import SearchbarFormContainer from '../searchbar/searchbar_form_container';

const NavBar = ({ currentUser, logout, match: { path, isExact } }) => {
    
    function searchBar() {
        if (path === '/' && isExact === false) {
        return <div><SearchbarFormContainer /></div>
         } else {return null}
    }

    let history = useHistory();
    
    const display = currentUser ? (
        <div className="nav">
            <div className="nav-left">
            
                <i id="add-biz-link" onClick={() => history.push("/businesses/new")} className="far fa-building">
                    <span>Add&nbsp;Your&nbsp;Business</span>
                </i>

                <i id="github"
                    className="fab fa-github"
                    onClick={() => window.location.replace("https://github.com/tinatae/yallr")}><span id="mobile-no">Github</span>
                </i>

                <i id="linkedin"
                    className="fab fa-linkedin"
                    onClick={() => window.location.replace("https://www.linkedin.com/in/tina-tae-87a3ba18/")}><span id="mobile-no">LinkedIn</span>
                </i>    

                <i id="portfolio"
                    className="fas fa-feather-alt"
                    onClick={() => window.location.replace("https://tinatae.com")}><span id="mobile-no">Portfolio</span></i>             
            </div>

            {searchBar()}

            <div className="logged-right">
                <div className="greeting">
                    <div id="hello">Hello, </div>
                    <div id="username"> {currentUser.username}</div>
                    <button className="logout" onClick={logout}>Log&nbsp;Out</button>              
                </div>
            </div>
        </div >
    ) : (
        <div className="nav">
            <div className="nav-left">
        
                <i id="add-biz-link" onClick={() => history.push("/businesses/new")} className="far fa-building">
                    <span>Add&nbsp;Your&nbsp;Business</span>
                </i>
                             
                <i id="github"
                    className="fab fa-github"
                    onClick={() => window.location.replace("https://github.com/tinatae/yallr")}><span id="mobile-no">Github</span>
                </i>

                <i id="linkedin"
                    className="fab fa-linkedin"
                    onClick={() => window.location.replace("https://www.linkedin.com/in/tina-tae-87a3ba18/")}><span id="mobile-no">LinkedIn</span>
                </i>

                <i id="portfolio"
                    className="fas fa-feather-alt"
                    onClick={() => window.location.replace("https://tinatae.com")}><span id="mobile-no">Portfolio</span>
                </i>
            </div>

            {searchBar()}
               
            <div className="notlogged-right">
           
                    <div id="navlink-login">
                        <Link style={{textDecoration: 'none'}} to={"/login"}>              
                            <span>Log&nbsp;In</span>               
                        </Link>
                    </div>
                    <div id="navlink-signup">
                        <Link style={{textDecoration: 'none'}} to={"/signup"}>           
                            <span>Sign&nbsp;Up</span>    
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