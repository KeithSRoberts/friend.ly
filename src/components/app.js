import React, { Component }  from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Account from "./account";
import CreateGroup from "./createGroup";
import Groups from "./groups";
import Navbar from "./navbar";
import Splash from "./splash";
import ViewGroup from "./viewGroup";

import * as routes from "../constants/routes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: ""
    }
  }
  navbarCallback = (query) => {
    this.setState({query: query});

  }
  render() {
    return(
      <HashRouter basename='/'>
        <Switch>
          <Route exact path={routes.SPLASH} render={(props) => <Splash {...props} />} />
          <Route exact path={`${routes.ACCOUNT}/:userId`} render={(props) =>
            <React.Fragment>
              <Navbar />
              <Account {...props} />
            </React.Fragment>
          } />
          <Route exact path={routes.CREATE_GROUP} render={(props) => 
            <React.Fragment>
              <Navbar />
              <CreateGroup {...props} />
            </React.Fragment>
          } />
          <Route exact path={routes.GROUPS} render={(props) => 
            <React.Fragment>
              <Navbar currentPage="groups" callBackToApp={this.navbarCallback}/>
              <Groups {...props} queryFromApp={this.state.query} />
            </React.Fragment>
          } />
          <Route exact path={`${routes.VIEW_GROUP}/:groupId`} render={(props) =>
            <React.Fragment>
              <Navbar/>
              <ViewGroup {...props} />
            </React.Fragment>
          } />
          <Redirect to={routes.SPLASH} />
        </Switch>
      </HashRouter>
    );
  }
}


// wrap app export with Firebase authentication and supported providers
export default App;
