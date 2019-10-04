import React, { useState } from 'react'
import "../../../static/navbar2.css"
import { Icon } from "antd";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileNav = () => {

        setIsOpen(!isOpen);

    }

    return (
        <header className="header">
            <div className="container main-menu">
                <div className="logo">
                    <img style={{ width: "100%" }} src="../../static/Band-Logo.png" />
                </div>

                <div className="nav-menu">

                    <div className="nav-item nav-one">
                        <ul>
                            <li>
                                <a href="#">PLATFORM OF TRUST</a>
                            </li>
                            <li>
                                <a href="#">DEVELOPER PORTAL </a>
                            </li>
                            <li>
                                <a href="#">SERVICE STATUS</a>
                            </li>
                        </ul>
                        <div className="extra">
                            <a className="button">SOUMEKSI</a>
                            <a className="button" style={{ marginRight: "37px" }}>IN ENGLISH</a>
                            <button className="secondary-btn">SIGN IN / REGISTER</button>
                        </div>
                    </div>

                    <div className="nav-item nav-two">
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
                        <div className="extra">
                            <button className="primary-button">PRICING</button>
                        </div>
                    </div>
                </div>

                <Icon className="bar" onClick={toggleMobileNav} type="menu" style={{ fontSize: "30px", color: "white" }} />
            </div>

            <div className={`mobile-menu ${isOpen ? 'active-mobile-nav' : ''}`}>
                <div className="mobile-menu-content">
                    <div className="nav-one-mobile-menu container">
                        <Icon className="close-icon" onClick={toggleMobileNav} type="close" />
                        <h4 className="mobile-logo-text">PLATFORM OF TRUST</h4>
                    </div>

                    <div className="nav-two-mobile-menu">
                        <ul>
                            <li>
                                <a href="#">CASES</a>
                            </li>
                            <li>
                                <a href="#">PARTNERS</a>
                            </li>
                            <li>
                                <a href="#">FEATURES</a>
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
                                <a href="#">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-three-mobile-menu">
                        <ul>
                            <li>
                                <a href="#">DEVELOPER PORTAL </a>
                            </li>
                            <li>
                                <a href="#">SERVICE STATUS</a>
                            </li>
                            <li>
                                <a href="#">SOUMEKSI</a>
                            </li>
                        </ul>
                        <div className="extra">
                            <button className="secondary-btn btn-lg">SIGN IN / REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Nav;