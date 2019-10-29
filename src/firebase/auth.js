import { auth } from "./firebase";

// takes in an email, username, and password
// makes a new user with given email, username and password in database
// pre-condition: email must be valid and not already in the database, username must not be in the database
// post-condition: user must be able to succesfully log in with username and password
export const doCreateUserWithEmailUsernameAndPassword = (email, name, pass) => {

};

// takes in an username and password
// logs in user with username and password
// pre-condition: username and password must be present in the database
// post-condition: user must be redirected to the dashboard page
export const doSignInWithUsernameAndPassword = (name, pass) => {

};

// signs out the user
// pre-condition: user must be logged in
// post-condition: user must be logged out and redirected to the login page
export const doSignOut = () => {

};