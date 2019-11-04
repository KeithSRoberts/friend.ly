import React, { Component }  from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Account from "./account";
import CreateGroup from "./createGroup";
import Groups from "./groups";
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
            <Account {...props} />
          } />
          <Route exact path={routes.CREATE_GROUP} component={() => <CreateGroup />} />
          <Route exact path={routes.GROUPS} component={() => <Groups />} />
          <Route exact path={`${routes.VIEW_GROUP}/:groupId`} render={(props) =>
            <ViewGroup {...props} />
          } />
          <Redirect to={routes.SPLASH}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
