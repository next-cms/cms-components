import React, { Fragment } from 'react'
import "../../../static/navbar2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () =>{
    return(
        <header>
            <div className="logo"><img style={{width: "180px", height:"180px"}} src="../../static/Band-Logo.png"/></div>
            <span>
                <p style={{width: "250px"}}><b>BACK TO THE DESKTOP</b></p>
                <div className="menu-toggle">
                <FontAwesomeIcon icon={faBars} ariaHidden="true"/>
                </div>
            </span>

            <nav>
            <ul>
                <li>
                    <a href="#">PLATFORM OF TRUST</a>
                </li>
                <li>
                    <a href="#">DEVELOPER PORTAL    </a>
                </li>
                <li>
                    <a href="#">SERVICE STATUS</a>
                </li>
            </ul>
            </nav>

            

            <div className="main-navbar">
                <div className="flex">
            <div className="nav-container">
            <ul>
                <li>
                    <a href="#">CASES</a>
                </li>
                <li>
                    <a href="#">PARTNERS</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">NEWS</a>
                </li>
                <li>
                    <a href="#">EVENTS</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">CONTACT</a>
                </li>
                
            </ul>
            </div>
            <div className="pricing-button-container">
            <button className="pricing-table-button">PRICING</button>
            </div>
            </div>
            </div>

            <div className="buttonContainer">
                <button className="button" style={{marginLeft: "20px"}}>SOUMEKSI</button> 
                <button className="button">IN ENGLISH</button>
                <button className="signInButton">Sign in / Register</button>
            </div>
            
            
        </header>
    )
}
export default Nav;