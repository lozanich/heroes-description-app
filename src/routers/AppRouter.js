import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  const { logged } = user;

  // console.log(user);

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
          <PublicRouter
            isAuth={logged}
            component={LoginScreen}
            exact
            path="/login"
          />

          <PrivateRouter isAuth={logged} path="/" component={DashBoardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
