import { database as db } from "./firebase";

let userRef = db.ref("users/");

/* User Profile-Related DB Functions */

// takes in a user id and profile JSON object
// updates user profile
// pre-condition: user must be logged in and there must be changes to 
// the user's profile
// post-condition: user's profile now persists those changes even when 
// the user leaves the profile page and comes back
export const updateProfile = (uid, profileObj) => {

};

// takes in a user id
// returns user profile JSON object
// pre-condition: user must be logged in and on the profile page
// post-condition: must return the user's profile details as a JSON object
export const getUserProfile = uid => {

};

// takes in a group JSON object
// creates a new group in the database
// pre-condition: user must be logged in and all group object fields must
// have values
// post-condition: must create a new group with the specified details 
// and one member (the user) 
export const createGroup = groupObj => {

};

// returns a list of all groups in the database
// pre-condition: user must be logged in and on the groups page
// post-condition: must return a list of groups as an array of JSON objects
export const getGroups = () => {

};

// takes in a group id
// returns a list of all members belonging to a group
// pre-condition: user must be logged in and on the viewGroup page
// post-condition: must return a list of group members as an array of
// JSON objects
export const getGroupMembers = gid => {

}