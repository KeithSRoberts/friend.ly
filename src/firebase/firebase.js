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

  doRenderPosts(groupIndex) {
    let group = groupIndex.toString();

    this.db.ref('groups/' + group + '/groupDiscussion').once('value').then((snapshot) => {

      let value = snapshot.val();
      let numPosts = value.numPosts;
      let posts = [];

      let testPost = {
        author: "Bojack",
        upvotes: 9,
        title: "test post 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id nisi placerat, luctus nisi ac, semper tellus. Aenean tristique auctor quam    ,     vitae accumsan enim posuere sit amet.",
      }
      posts.push(testPost);

      // console.log(value.posts['post-1']);

      for(let i = 1; i <= numPosts; i++) {
        console.log(value.posts['post-' + i]);
        posts.push(value.posts['post-' + i])
      }

      return posts;

    })

    console.log("fetched posts");
  }

  doCreatePost (post, groupIndex) { 
    let group = groupIndex.toString();

    this.db.ref('groups/' + group + '/groupDiscussion').once('value').then((snapshot) => {

      let value = snapshot.val();
      console.log(value);
      let numPosts = value.numPosts + 1;    

      // create new post-# and update number of posts in groupDiscussion
      this.db.ref('groups/' + group + '/groupDiscussion/posts/post-' + numPosts).set(post)
      this.db.ref('groups/' + group + '/groupDiscussion/numPosts').set(numPosts);

    })
  }

  doSignInUser = (username, password, callback) => {
    let users = this.db.ref("users");

    users.once("value", (snapshot) => {
      let userList = snapshot.val();

      for (let i = 0; i < userList.length; i++) {
        let user = userList[i];

        if (user.username === username && user.password === password) {
          global.userId = i;
          break;
        }
      }

      callback();
    }, (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    });
  }

  doCreateUser = (username, password, email, interests, media, avatar) => {
    let userIndex = this.db.ref("userIndex");
    let index = 0;

    userIndex.once("value", (snapshot) => {
      let value = snapshot.val();

      if (!!value) {
        index += value.index + 1;
      }

      this.db.ref('users/' + index).set({
        username,
        password,
        email,
        interests,
        media,
        avatar
      });

      let usernameRef = this.db.ref('usernames');
      let emailRef = this.db.ref('emails');
      
      usernameRef.once("value", (snapshot) => {
        let usernames = snapshot.val();

        if (!!usernames) {
          let newUsernames = usernames.slice(0);

          newUsernames.push(username);

          usernameRef.set(newUsernames);
        } else {
          usernameRef.set([username]);
        }
      });
      
      emailRef.once("value", (snapshot) => {
        let emails = snapshot.val();

        if (!!emails) {
          let newEmails = emails.slice(0);

          newEmails.push(email);

          emailRef.set(newEmails);
        } else {
          emailRef.set([email]);
        }
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

  fetchGroups = async () => {
    let result = []
    const groups = this.db.ref('groups/');
    await groups.once('value', snap => {
      snap.forEach(child => {
        result.push(child.val());
      });
    });
    return result;
  }

  doLeaveGroup = (groupId, userId) => {
    const group = this.db.ref('groups/' + groupId + '/groupMembers/' + userId);
    group.remove();
  }

  doJoinGroup = (groupId, userId, username, userText, userImage) => {
    const group = this.db.ref('groups/' + groupId + '/groupMembers/' + userId);
    group.set({
        name: username,
        text: userText,
        image: userImage
    });
  }
}

export default Firebase;

