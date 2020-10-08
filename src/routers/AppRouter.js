import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/marvel">
            <Marvel />
          </Route>
          <Route path="/dc">
            <DcScreen />
          </Route> */}
          <Route exact path="/login" component={LoginScreen} />

          <Route path="/" component={DashBoardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
