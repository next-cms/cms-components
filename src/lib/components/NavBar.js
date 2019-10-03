import React, { Fragment } from 'react'
import "../../../static/navbar.css"


const Nav =()=> {
    return(
        <Fragment>
            
        
        <div className="topnav" id="myTopnav">
        <a href="#home">PLATFORM OF TRUST</a>
        <a href="#news">DEVELOPER</a>
        <a href="#contact">SERVICE STATUS</a>
        <button className="button" style={{marginLeft: "20px"}}>SOUMEKSI</button> 
        <button className="button">IN ENGLISH</button>
        <button className="signInButton">Sign in / Register</button>
      </div>
      <div id="div2">
          <img style={{width: "160px", height:"160px"}} src="../static/Band-Logo.png"/>
      </div>
      </Fragment>

)
        


}

export default Nav;
