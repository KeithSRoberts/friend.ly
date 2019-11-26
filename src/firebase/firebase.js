import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCjFozSJS_UDFLvHZlOWtoivdjg5wK28x4",
  authDomain: "friendly-mvp.firebaseapp.com",
  databaseURL: "https://friendly-mvp.firebaseio.com",
  projectId: "friendly-mvp",
  storageBucket: "friendly-mvp.appspot.com",
  messagingSenderId: "216744515433",
  appId: "1:216744515433:web:a6f3d0a7548ec5ebd98ff8"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  /*
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
  */

  doCreateUser = (username, password, email, interests) => {
    let userIndex = this.db.ref("userIndex");
    let index = 1;

    userIndex.once("value", (snapshot) => {
      let value = snapshot.val();

      if (!!value) {
        index += value.index;
      }

      this.db.ref('users/' + index).set({
        username,
        password,
        email,
        interests
      });

      userIndex.update({ index });
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
  }

  createNewGroup = (groupObj) => {
    let currIndex;
    this.db.ref('groupIndex').once('value').then((snapshot) => {
        currIndex = snapshot.val();
        currIndex++;
        groupObj['groupId'] = currIndex;
        this.db.ref('groups/' + currIndex).set(groupObj);
        this.db.ref('groupIndex').set(currIndex);
    });
  }

  fetchGroup = async (groupId) => {
    const group = this.db.ref('groups/' + groupId);
    const snapshot = await group.once('value');
    const value = snapshot.val();
    return value;
  }
}

export default Firebase;

