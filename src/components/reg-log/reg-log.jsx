import React, { useState, useEffect } from "react";
import {
    Redirect
} from "react-router-dom";
import { gsap, TweenLite } from "gsap";
import "./reg-log.scss";
import logo from "./Logo.png";

gsap.registerPlugin(TweenLite)

const RegLog = (props) => {

    // const tl = new TweenLite();
    const [toggler, setToggler] = useState("container");

    useEffect(() => {

        gsap.to(".container", 0.7, {
            // y: 0,
            ease: "easeInOut",
            css: {
                opacity: 1,
                translateY: "0"
            }
        })
        // tl.to(".container", { css: { opacity: "1", translateY: "0" } }, 0.4)
    })

    if (props.loggedUser) {
        return (
            <Redirect to="/Home"></Redirect>
        )
    } else {
        return (
            <div className="reg-log">
                {/* <div className="sign-up">
                    <div className="form-section">
                        <div className="form-header">
                            <img src={logo} alt="Logo" className="logo" />
                            <h3 className="fakeboss">Fakeboss</h3>
                        </div>

                        <div className="form-inputs">
                            <div className="form-input">
                                <label htmlFor="name-input">Full Name</label>
                                <input
                                    onChange={(e) => props.setName(e.target.value)}
                                    type="text"
                                    id="name-input"
                                    value={props.name}
                                    required
                                />
                            </div>
                            <div className="form-input">
                                <label htmlFor="email-input">E-Mail</label>
                                <input
                                    onChange={(e) => props.setEmail(e.target.value)}
                                    type="email"
                                    id="email-input"
                                    value={props.email}
                                    required
                                />
                                <p className="error">{props.emailError}</p>
                            </div>
                            <div className="form-input">
                                <label htmlFor="password-input">Password</label>
                                <input
                                    onChange={(e) => props.setPassword(e.target.value)}
                                    type="password"
                                    id="password-input"
                                    required
                                    value={props.password}
                                />
                                <p className="error">{props.passwordError}</p>
                            </div>
                        </div>

                        <div className="form-btn">
                            <button className="submit">Sign Up</button>
                            <div className="instead">
                                <p>Already have an Account ?</p>
                                <a href="#">Sign in</a>
                            </div>
                        </div>
                    </div>

                    <div className="hero-section">

                        <div className="illustration"></div>
                        <div className="slogan"></div>

                    </div>
                </div>
                <div className="login"></div> */}


                <div className={toggler}>
                    <div className="form-container sign-up-container">
                        <div className="form-header">
                            <h2>Create New Account</h2>
                        </div>

                        <div className="form-section">
                            <div className="form-inputs">
                                <div className="form-input">
                                    <label htmlFor="name-input">Full Name</label>
                                    <input
                                        onChange={(e) => props.setName(e.target.value)}
                                        type="text"
                                        id="name-input"
                                        value={props.name}
                                        required
                                    />
                                </div>
                                <div className="form-input">
                                    <label htmlFor="email-input">E-Mail</label>
                                    <input
                                        onChange={(e) => props.setEmail(e.target.value)}
                                        type="email"
                                        id="email-input"
                                        value={props.email}
                                        required
                                    />
                                    <p className="error">{props.emailError}</p>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="password-input">Password</label>
                                    <input
                                        onChange={(e) => props.setPassword(e.target.value)}
                                        type="password"
                                        id="password-input"
                                        required
                                        value={props.password}
                                    />
                                    <p className="error">{props.passwordError}</p>
                                </div>
                            </div>

                            <div className="form-btn">
                                <button className="submit" onClick={(e) => {
                                    e.preventDefault();
                                    props.handleSignUp();
                                }}>Sign Up</button>
                                <div className="instead">
                                    <p>Already have an Account ?</p>
                                    <a onClick={() => {
                                        props.clearErrors()
                                        props.clearInput()
                                        setToggler("container")
                                    }}>Sign in</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-container sign-in-container">
                        <div className="form-header">
                            <h2>Sign In</h2>
                        </div>
                        <div className="form-section">

                            <div className="form-inputs">
                                <div className="form-input">
                                    <label htmlFor="email-input">E-Mail</label>
                                    <input
                                        onChange={(e) => props.setEmail(e.target.value)}
                                        type="email"
                                        id="email-input"
                                        value={props.email}
                                        required
                                    />
                                    <p className="error">{props.emailError}</p>
                                </div>
                                <div className="form-input">
                                    <label htmlFor="password-input">Password</label>
                                    <input
                                        onChange={(e) => props.setPassword(e.target.value)}
                                        type="password"
                                        id="password-input"
                                        required
                                        value={props.password}
                                    />
                                    <p className="error">{props.passwordError}</p>
                                </div>
                            </div>
                            <div className="form-btn">
                                <button className="submit" onClick={(e) => {
                                    e.preventDefault();
                                    props.handleLogin();
                                }}>Sign In</button>
                                <div className="instead">
                                    <p>Don't have Account ?</p>
                                    <a onClick={() => {
                                        props.clearErrors()
                                        props.clearInput()
                                        setToggler("container right-panel-active")
                                    }}>Sign Up</a>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <img src={logo} alt="Logo" />
                                <h3>Fakeboss</h3>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <img src={logo} alt="Logo" />
                                <h3>Fakeboss</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

        )
    }
}

export default RegLog;