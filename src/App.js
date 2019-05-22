import React, { Suspense, lazy } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";

import Dashboard from "./containers/dashboard/dashboard";
import PageNotFound from "./components/page-not-found/page-not-found";
import Loader from './containers/loader/loader'

const AgencyDetails = lazy(() =>
  import("./containers/agency-details/agency-details")
);

const App = () => {
  return (
    <React.Fragment>
      <nav>
        <ul style={{ listStyle: "none", margin: "auto", padding: "0" }}>
          <li style={{ margin: "10px", display: "inline-block" }}>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li style={{ margin: "10px", display: "inline-block" }}>
            <NavLink to="/agency-detail">Agency Detail</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Suspense fallback={<Loader />}>
          <Route path="/agency-detail" component={AgencyDetails} />
        </Suspense>
        <Route component={PageNotFound} />
      </Switch>
      <Loader></Loader>
    </React.Fragment>
  );
};

export default App;
