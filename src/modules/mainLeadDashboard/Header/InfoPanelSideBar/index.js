/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./index.scss";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import icon from "../../../../assets/springboard.png";
class InfoPanelSideBar extends Component {
  closePanel = () => {
    this.props.closeInfoPanel();
  };
  renderProfile() {
    return (
      <div className="profile-container">
        <div className="profile-icon-block">
          <img src={icon} className="profile-icons" />
        </div>
        <div className="sub-profile-container">
          <span className="profile-labels">Edit Profile</span>
          <span className="profile-labels">Logout</span>
        </div>
      </div>
    );
  }
  renderNotifications() {
    return (
      <div className="notification-container">
        <div className="notification-label">sample msg 1</div>
        <div className="border-bottom" />
        <div className="notification-label">sample msg 2</div>
        <div className="border-bottom" />
        <div className="notification-label">sample msg 3</div>
        <div className="border-bottom" />
      </div>
    );
  }
  componentDidMount() {
    document.addEventListener("mousedown", (e) => this.handleClickOutside(e));
  }
  handleClickOutside(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.props && this.props.closeInfoPanel();
    }
  }
  render() {
    return (
      <div
        className={
          this.props.open
            ? "info-panel-container"
            : "info-panel-container ispanel-close"
        }
        ref={(node) => {
          this.node = node;
        }}
      >
        <div className="info-panel-close">
          <div className="info-status-label">{this.props.infoStatus}</div>
          <CancelPresentationIcon
            className="close-icon"
            onClick={this.closePanel}
          />
        </div>
        <div className="border-bottom" />
        {this.props.infoStatus === "Profile" ? this.renderProfile() : null}
        {this.props.infoStatus === "Notifications"
          ? this.renderNotifications()
          : null}
      </div>
    );
  }
}

export default InfoPanelSideBar;
