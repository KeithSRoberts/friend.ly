const config = {
    // api key goes here
};

// load firebase from index.html script.
let firebase = window.firebase.initializeApp(config); 

// export auth
export const auth = firebase.auth();

// export database
export const database = firebase.database();