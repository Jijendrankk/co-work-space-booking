/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./index.scss";
import hsImg from "../../../assets/springboard.png";
import NavListOption from "./NavListOption";
import CircularProgress from "@material-ui/core/CircularProgress";

class SideBar extends Component {
  state = {
    changeToLoader: false,
    showLoader: false,
  };
  close = () => {
    console.log(this.props.isOpen);
  };
  componentDidMount() {
    document.addEventListener("mousedown", (e) => this.handleClickOutside(e));
  }
  handleClickOutside(e) {
    if (this.node && !this.node.contains(e.target) && window.innerWidth < 951) {
      this.props.closeSideBar();
    }
  }
  redirectTo = (redirectInfo) => () => {
    console.log(redirectInfo);
  };
  updateVersion = () => {
    this.setState({ showLoader: true, changeToLoader: true });
    let count = 0;
    let intervalID = setInterval(() => {
      this.setState({ changeToLoader: false });
      if (++count === 2) {
        this.setState({ showLoader: false });
        window.clearInterval(intervalID);
      }
    }, 2000);
  };
  render() {
    return (
      <nav
        className={
          this.props.isOpen
            ? "side-bar-container side-bar-open"
            : "side-bar-container"
        }
        ref={(node) => {
          this.node = node;
        }}
      >
        <div>
          <div className="space-container-img">
            <img src={hsImg} className={"hs-label-with-img"} />
            <span className="space-label">Space OS</span>
          </div>
          <NavListOption />
        </div>
        <div className="side-bar-versions-and-policy">
          <div className="versions-and-policy-label-block">
            <span onClick={this.redirectTo("aboutUs")}>About Us</span>
            <span onClick={this.redirectTo("policy")}>
              {" "}
              - Privacy Policy -{" "}
            </span>
            <span onClick={this.redirectTo("terms")}>Terms</span>
          </div>
          <div className="border-bottom add-width"></div>
          <div className="version-update-label" onClick={this.updateVersion}>
            Ver 1.012 - Check for Updates
          </div>
          {this.state.showLoader && (
            <div className="version-pending-state">
              {this.state.changeToLoader ? (
                <CircularProgress className="circular-icon" size={20} />
              ) : (
                <span className="version-success-label">
                  Version already updated.
                </span>
              )}
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default SideBar;
