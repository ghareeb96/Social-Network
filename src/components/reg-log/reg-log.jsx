import React, { useState, useEffect } from "react";
import "./reg-log.scss";


const RegLog = (props) => {

    const [toggler, setToggler] = useState("container");

    return (
        <div className="reg-log">
            <div className={toggler}>
                <div className="form-container sign-up-container">
                    <form>
                        <h1>Create New Account</h1>
                        <span>Use your E-mail for registration</span>
                        <input
                            onChange={(e) => props.setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            value={props.name}
                            required
                        />
                        <input
                            onChange={(e) => props.setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            value={props.email}
                            required
                        />
                        <p className="error">{props.emailError}</p>
                        <input
                            onChange={(e) => props.setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            required
                            value={props.password}
                        />
                        <p className="error">{props.passwordError}</p>
                        <button onClick={(e) => {
                            e.preventDefault();
                            props.handleSignUp()
                        }}>Sign Up</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form>
                        <h1>Sign In</h1>
                        <span>Use your account</span>
                        <input
                            onChange={(e) => props.setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            value={props.email}
                            required autoFocus
                        />
                        <p className="error">{props.emailError}</p>
                        <input
                            onChange={(e) => props.setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            required
                            value={props.password}
                        />
                        <p className="error">{props.passwordError}</p>
                        <button onClick={(e) => {
                            e.preventDefault()
                            props.handleLogin()
                        }}>Sign In</button>
                    </form>

                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome back !</h1>
                            <p>Please, Login to keep connected</p>
                            <button
                                onClick={() => {
                                    props.clearErrors()
                                    props.clearInput()
                                    setToggler("container")
                                }}
                                className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello Friend !</h1>
                            <p>Start the Journey with Us !</p>
                            <button onClick={() => {
                                props.clearErrors()
                                props.clearInput()
                                setToggler("container right-panel-active")
                            }} className="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default RegLog;


