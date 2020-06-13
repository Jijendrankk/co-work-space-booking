/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import hsImg from "../../../assets/springboard.png";
import "./index.scss";

export default function StaticData(props) {
  return (
    <div className="login-static-data-section">
      <div className="login-static-data-block">
        <img src={hsImg} className="hs-img-icon" />
        <div className="login-static-space-os-label">
          Space OS
          <span className="login-static-version-label"> V 1.012</span>
          <span className="beta-label">BETA</span>
        </div>
        <div className="login-static-data-container">
          Our partners with office space operators
        </div>
        <div className="login-static-data-label">
          Its an invite only platform, you can{" "}
          <span className="access-link" onClick={props.handleLoginOrSignup}>
            {props.loginOrSignup ? "login here." : "request access here."}
          </span>
        </div>
      </div>
    </div>
  );
}
