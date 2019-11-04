import React, { Component }  from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Account from "./account";
import CreateGroup from "./createGroup";
import Groups from "./groups";
import Navbar from "./navbar";
import Splash from "./splash";
import ViewGroup from "./viewGroup";

import * as routes from "../constants/routes";

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.SPLASH} component={() => <Splash />} />
          <Route exact path={`${routes.ACCOUNT}/:userId`} render={(props) =>
            <React.Fragment>
              <Navbar />
              <Account {...props} />
            </React.Fragment>
          } />
          <Route exact path={routes.CREATE_GROUP} component={() => 
            <React.Fragment>
              <Navbar />
              <CreateGroup />
            </React.Fragment>
          } />
          <Route exact path={routes.GROUPS} component={() => 
            <React.Fragment>
              <Navbar />
              <Groups />
            </React.Fragment>
          } />
          <Route exact path={`${routes.VIEW_GROUP}/:groupId`} render={(props) =>
            <React.Fragment>
              <Navbar />
              <ViewGroup {...props} />
            </React.Fragment>
          } />
          <Redirect to={routes.SPLASH}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
