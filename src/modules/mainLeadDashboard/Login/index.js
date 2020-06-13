/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import hsImg from "../../../assets/springboard.png";
import StaticData from "./StaticData";
import Checkbox from "@material-ui/core/Checkbox";
import ScrollDialog from "../../../shared/Components/ScrollDialog";
import "./index.scss";

class Login extends Component {
  state = {
    showPassword: false,
    loginPassword: "",
    isForgotPwd: false,
    isSignUpStatus: false,
    termsAndConditionStatus: false,
    isTermsOpen: false,
    scrollDialogMainContent:
      "asdjfkljsadlfjlkjsadfkjlksajdf;jls kadjfk jsldfja;skfjklajsd; fsdalkjsakldfjlksadf asdjfkljsadlfjlkjsadfkjlksajdf;jlskadjfk jsldfja;skfjklajsd; fsdalkjsakldfjlksadf asdjfkljsadlfjlkjsadfkjlksajdf;jlskadjfk jsldfja;skfjklajsd; fsdalkjsakldfjlksadf asdjfkljsadlfjlkjsadfkjlksajdf;jlskadjfk jsldfja;skfjklajsd; fsdalkjsakldfjlksadf asdjfkljsadlfjlkjsadfkjlksajdf;jlskadjfk jsldfja;skfjklajsd; fsdalkjsakldfjlksadf asdjfkljsadlfjlkjsadfkjlksajdf;jlskadjfk jsldfja;skfjklajsd; fsdalkjsakldfjlksadf asdjfkljsadlfjlkjsadfkjlksajdf;jlskadjfk jsldfja;skfjklajsd; fsdalkjsakldfjlksadf v asdjfkljsadlfjlkjsadfkjlksajdf;jlskadjfk jsldfja;skfjklajsd; fsdalkjsakldfjlksadf",
  };

  componentDidMount() {
    if (window.location.search === "?signup=true") {
      this.setState({ isSignUpStatus: true });
    }
  }
  handleClickShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };
  callLogin = () => {
    this.setState({
      isSignUpStatus: false,
    });
  };
  callForgotPwd = () => {
    this.setState((prevState) => ({
      isForgotPwd: !prevState.isForgotPwd,
    }));
  };
  renderLoginBlock() {
    return (
      <div className="login-block">
        <img src={hsImg} className="hs-img-icon isDisable" />
        <div className="login-label">
          Login to <span className="space-os-label">Space OS</span>
        </div>
        <TextField
          id="standard-basic"
          className="user-name-text-field"
          label="Official Email ID"
          placeholder="EX: name@gmail.com"
          margin="normal"
          autoComplete="off"
          required
        />
        <TextField
          type={this.state.showPassword ? "text" : "password"}
          label="Password"
          placeholder="enter your password"
          className="password-text-field"
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
          onChange={(event) =>
            this.setState({ loginPassword: event.target.value })
          }
        />
        <Button
          className="login-btn"
          onClick={() => this.props.history.push("/dashboard")}
        >
          Login
        </Button>
        <div className="forgot-password-block">
          <span className="forgot-password-label" onClick={this.callForgotPwd}>
            Forgot Password?
          </span>
        </div>
        <div className="new-user-block">
          New user?
          <span
            className="sign-up-label"
            onClick={this.changeLoginOrSignupStatus}
          >
            signup
          </span>
        </div>
      </div>
    );
  }
  handleTermsAndConditions = () => {
    this.setState((prevState) => ({
      termsAndConditionStatus: !prevState.termsAndConditionStatus,
    }));
  };
  handleTermsAndCondition = () => {
    this.setState({
      isTermsOpen: true,
    });
  };
  handleScrollDialogClose = () => {
    this.setState({
      isTermsOpen: false,
    });
  };
  renderSignUp() {
    return (
      <div className="signup-block">
        <img src={hsImg} className="hs-img-icon isDisable" />
        <div className="signup-label">
          Signup to <span className="space-os-label">Space OS</span>
        </div>
        <TextField
          className="user-name-text-field"
          label="Your Name"
          placeholder="enter your fullname"
          autoComplete="off"
          required
        />
        <TextField
          className="password-text-field"
          label="Organization Name"
          placeholder="enter your organization"
          autoComplete="off"
          required
        />
        <TextField
          className="password-text-field"
          label="User Name"
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end"> .coworkname.space</InputAdornment>
            ),
          }}
        />
        <TextField
          className="password-text-field"
          label="Official Email ID"
          placeholder="EX: name@gmail.com"
          autoComplete="off"
          required
        />
        <TextField
          type={this.state.showPassword ? "text" : "password"}
          label="Password"
          placeholder="enter your password"
          className="password-text-field"
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
          onChange={(event) =>
            this.setState({ loginPassword: event.target.value })
          }
        />
        <TextField
          className="password-text-field"
          label="Phone Number"
          placeholder="EX: +91XXXXXXXXXX"
          autoComplete="off"
          required
        />
        <div className="terms-and-check-box-block">
          <Checkbox
            checked={this.state.termsAndConditionStatus}
            onChange={this.handleTermsAndConditions}
            color="primary"
          />
          <span>
            I accept the{" "}
            <span
              className="terms-condition-label"
              onClick={this.handleTermsAndCondition}
            >
              terms and conditions
            </span>
          </span>
        </div>
        <Button
          className="signup-btn"
          onClick={() => this.props.history.push("/dashboard")}
        >
          Request Access
        </Button>
        <div className="forgot-password-block">
          Already an User?
          <span className="forgot-password-label" onClick={this.callLogin}>
            {" "}
            Login here.
          </span>
        </div>
      </div>
    );
  }
  renderForgotPwd() {
    return (
      <div className="forgot-password-container">
        <span className="forgot-password-word">Forgot Password</span>
        <TextField
          className="email-text-field"
          label="Official Email ID"
          placeholder="EX: name@gmail.com"
          autoComplete="off"
          required
        />
        <Button className="send-mail-btn">Send Mail</Button>
        <div className="back-to-login-block">
          <span className="back-to-login" onClick={this.callForgotPwd}>
            Back to Login?
          </span>
        </div>
      </div>
    );
  }
  changeLoginOrSignupStatus = () => {
    this.setState((prevState) => ({
      isSignUpStatus: !prevState.isSignUpStatus,
      isForgotPwd: false,
    }));
  };
  render() {
    return (
      <div className="login-container">
        <StaticData
          loginOrSignup={this.state.isSignUpStatus}
          handleLoginOrSignup={this.changeLoginOrSignupStatus}
        />
        {this.state.isSignUpStatus ? (
          <div className="signup-section">{this.renderSignUp()}</div>
        ) : (
          <div className="login-section">
            {this.state.isForgotPwd
              ? this.renderForgotPwd()
              : this.renderLoginBlock()}
          </div>
        )}
        <ScrollDialog
          scrollDialogTitle={"Terms and Conditions"}
          scrollDialogOpen={this.state.isTermsOpen}
          handleScrollDialogClose={this.handleScrollDialogClose}
        >
          <div>{this.state.scrollDialogMainContent}</div>
        </ScrollDialog>
      </div>
    );
  }
}

export default Login;
