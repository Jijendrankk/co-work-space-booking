import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../modules/mainLeadDashboard/LandingPage";
import Header from "../modules/mainLeadDashboard/Header";
import SideBar from "../modules/mainLeadDashboard/SideBar";
import SecondaryMenu from "../modules/mainLeadDashboard/SecondaryMenu";
import Login from "../modules/mainLeadDashboard/Login";
import "./index.scss";

function NavRoute({ exact, path, component: Component }) {
  const [openSideBarStatus, setOpenSideBarStatus] = React.useState(false);
  const handleSideBar = () => {
    setOpenSideBarStatus(true);
  };
  const handleSideBarClose = () => {
    setOpenSideBarStatus(false);
  };
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div className="sidebar-with-header-container">
          <SideBar
            isOpen={openSideBarStatus}
            closeSideBar={handleSideBarClose}
          />
          <div className="header-with-component-block">
            <Header handleHamburger={handleSideBar} />
            {/* <SecondaryMenu /> */}
            <div className="child-components">
              <Component {...props} />
            </div>
          </div>
        </div>
      )}
    />
  );
}

class Routing extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <NavRoute exact path="/dashboard" component={LandingPage} />
      </Switch>
    );
  }
}

export default Routing;
