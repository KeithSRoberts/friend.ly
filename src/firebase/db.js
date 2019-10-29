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
