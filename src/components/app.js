import React, { Component }  from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase/firebaseConfig';
import Account from "./account";
import CreateGroup from "./createGroup";
import Groups from "./groups";
import Navbar from "./navbar";
import Splash from "./splash";
import ViewGroup from "./viewGroup";

import * as routes from "../constants/routes";

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}


class App extends Component {
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
              <Navbar />
              <Groups {...props} />
            </React.Fragment>
          } />
          <Route exact path={`${routes.VIEW_GROUP}/:groupId`} render={(props) =>
            <React.Fragment>
              <Navbar />
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
export default withFirebaseAuth({
  providers, 
  firebaseAppAuth,
}) (App);
