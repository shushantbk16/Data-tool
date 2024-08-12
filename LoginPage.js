import React from "react";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="loginPage">
      <div>
        <p className="title">mPulse Outlier Data Tool</p>
        <hr />
      </div>
      <div>
        <div className="credentials">
          <div className="usernameSection">
            <p className="inputSection">Username</p>
            <input
              id="inputUserName"
              placeholder="Enter your Username"
              type="text"
              className="inputs"
              style={{"borderTopColor":"silver"}}
            ></input>
          </div>
          <div className="usernameSection">
            <p className="inputSection">Password</p>

            <input
              id="inputUserPassword"
              placeholder="Enter your password"
              type="password"
              className="inputs"
            />
          </div>
        </div>
        <div className="buttons">
          <button className="button1">Reset</button>
          <button className="button1" id="submitButton">
            Submit
          </button>
        </div>
        <hr></hr>
      </div>
      <div>
        <div className="dataTool">
          {/* <div className="upperArrow"></div>
          <div className="upperArrow"></div> */}
          <p className="footerHeading">Outlier Data Tool</p>
        </div>
        <div>
          <p className="version">Version : 1.0</p>
          <div>
            <p className="credits">Credits :</p>
            <div className="creditsName">
              <div className="creditor">
                <p className="name">Usharani K. (PM and Lead Developer)</p>
                <p className="name">Nikhil Nath (Developer)</p>
                <p className="name">Mohammed Sayeem (Developer)</p>
                <p className="name">Kalim khan (UI Designer)</p>
              </div>
              <div className="creditor">
                <p className="name">Concept:</p>
                <p className="name">Michael Williams</p>
                <p className="name">Richard Swann</p>
                <p className="name">Nasrullah Bhaiya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
