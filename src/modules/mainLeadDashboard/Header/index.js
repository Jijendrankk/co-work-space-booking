/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import InfoPanelSideBar from "./InfoPanelSideBar";
import MenuIcon from "@material-ui/icons/Menu";
import hsImg from "../../../assets/springboard.png";
import "./index.scss";

const styles = (theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-end",
      paddingRight: "2%",
    },
  },
  sectionMobile: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "2%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconColor: {
    color: "white",
    marginRight: "-4px",
  },
});

class Header extends Component {
  state = {
    isOpen: false,
    mobileMoreAnchorEl: null,
    infoStatus: null,
  };
  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  handleMenuOpen = (status) => () => {
    this.setState({
      isOpen: true,
      infoStatus: status,
      mobileMoreAnchorEl: null,
    });
  };
  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handlePanelClose = () => {
    this.setState({ isOpen: false });
  };

  renderMobileMenu = () => {
    return (
      <Menu
        anchorEl={this.state.mobileMoreAnchorEl}
        id={"primary-search-account-menu-mobile"}
        keepMounted
        open={Boolean(this.state.mobileMoreAnchorEl)}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleMenuOpen("Settings")}>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <Typography noWrap>Settings</Typography>
        </MenuItem>
        <MenuItem onClick={this.handleMenuOpen("Notifications")}>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Typography noWrap>Notifications</Typography>
        </MenuItem>
        <MenuItem onClick={this.handleMenuOpen("Profile")}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Typography noWrap>Profile</Typography>
        </MenuItem>
      </Menu>
    );
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="header-container">
          <MenuIcon
            className="hamburger-icon"
            onClick={this.props.handleHamburger}
          />
          <div className="space-container-img">
            <img src={hsImg} className={"hs-label-with-img"} />
            <span className="space-label">Space OS</span>
          </div>
          <div className={classes.sectionDesktop}>
            <div
              className="space-label-container"
              onClick={this.handleMenuOpen("Profile")}
            >
              <span className="space-label">91springboard</span>
              <NavigateNextIcon className="space-label-arrow" />
            </div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={"primary-search-account-menu"}
              aria-haspopup="true"
              className={classes.iconColor}
              onClick={this.handleMenuOpen("Settings")}
            >
              <SettingsIcon />
            </IconButton>
            <IconButton
              aria-label="show 17 new notifications"
              className={classes.iconColor}
              onClick={this.handleMenuOpen("Notifications")}
            >
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={"primary-search-account-menu"}
              aria-haspopup="true"
              className={classes.iconColor}
              onClick={this.handleMenuOpen("Profile")}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={"primary-search-account-menu-mobile"}
              aria-haspopup="true"
              className={classes.iconColor}
              onClick={this.handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </div>
          {this.renderMobileMenu()}
        </div>
        <InfoPanelSideBar
          open={this.state.isOpen}
          closeInfoPanel={this.handlePanelClose}
          infoStatus={this.state.infoStatus}
        />
      </>
    );
  }
}

export default withStyles(styles)(Header);
