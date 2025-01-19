import { useRef, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { GlobalContext } from "../Context.jsx";
import { useContext } from "react";
import "./componentOne.css";
import Component2 from "./Component2.jsx";
// import { BsTwitterX } from "react-bootstrap-icons";

const Component1 = () => {
  let userfirstName = useRef();
  let userlastName = useRef();
  let userEmail = useRef();
  let userPassword = useRef();
  let { state, dispatch } = useContext(GlobalContext);
  function login() {
    let firstName = userfirstName.current.value;
    let lastName = userlastName.current.value;
    let email = userEmail.current.value;
    let password = userPassword.current.value;
    dispatch({
      type: "USER_LOGIN",
      payload: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        img: [
          {
            src: "src/assets/profile-avatar.png",
            id: 1,
          },
          {
            src: "src/assets/Rectangle 14.png",
            id: 2,
          },
        ],
      },
    });
  }
  return (
    <>
      {/* name <input type="text" placeholder="enter your name" ref={userName} /><br/>
        email
        <input type="text" placeholder="enter your email" ref={userEmail} /><br/>
        subject
        <input type="text" placeholder="enter your subject" ref={userSubject} />
      
     
      <p>
        username: {state?.user?.userName} <br />
        email: {state?.user?.email} <br />
        subject: {state?.user?.subject} <br />
      </p>
      <br />
      <button onClick={login}>Login Malik</button> */}

      <div
        className="container p-3"
        style={{ backgroundColor: "white", borderRadius: "10px" }}
      >
        <div
          className="outerDiv p-4"
          style={{ backgroundColor: "#f6f1ff", borderRadius: "10px" }}
        >
          <h3>create a profile</h3>
          <p>create a free profile in 5min</p>
          <button className="google-btn">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google Logo"
            />
            <span>Continue with Google</span>
          </button>
          <hr />
          <div className="d-flex gap-3">
            <div>
              <div className="text-start">First Name</div>{" "}
              <input
                type="text"
                style={{
                  padding: "8px",
                  borderRadius: "10px",
                  outline: "none",
                }}
                required
                ref={userfirstName}
              />
            </div>
            <div>
              <div className="text-start">Last Name</div>{" "}
              <input
                type="text"
                style={{
                  padding: "8px",
                  borderRadius: "10px",
                  outline: "none",
                }}
                required
                ref={userlastName}
              />
            </div>
          </div>
          <div style={{ width: "100%" }} className="my-3">
            <div className="text-start"> Email</div>
            <input
              type="email"
              required
              className="w-100  "
              style={{ padding: "8px", borderRadius: "10px", outline: "none" }}
              ref={userEmail}
            />
          </div>
          <div style={{ width: "100%" }} className="my-3">
            <div className="text-start">Password</div>
            <input
              required
              type="password"
              className="w-100"
              style={{ padding: "8px", borderRadius: "10px", outline: "none" }}
              ref={userPassword}
            />
          </div>

          <hr />
          <button style={{ backgroundColor: "#855cf7" }} onClick={login}>
            Creat profile
          </button>
          {/* <Router>
            <div className="d-flex justify-content-between">
              <button style={{ backgroundColor: "#855cf7" }}>
                <Link to="/dashboard" className="text-dark">
                  {" "}
                  Go to profile
                </Link>
              </button>
            </div>
            <Routes>
              <Route path="/dashboard" element={<Component2 />} />
            </Routes>
          </Router> */}
        </div>
      </div>
    </>
  );
};

export default Component1;
