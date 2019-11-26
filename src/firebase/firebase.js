import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import SelectInput from '@material-ui/core/Select/SelectInput';

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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id nisi placerat, luctus nisi ac, semper tellus. Aenean tristique auctor quam    ,     vitae accumsan enim posuere sit amet.",
        image: "https://t2conline.com/wp-content/uploads/2017/12/vizslasf4.jpg"
      }
      posts.push(testPost);

      console.log(value);

      // for(let i = 1; i < numPosts; i++){
      //   let post = this.db.ref('groups/' + group + '/groupDiscussion/post-' + i).val()
      
      //   console.log(post);
      // }
      return posts;

    })

    console.log("fetched posts");
  }

  doCreatePost (post, groupIndex) { 
    let group = groupIndex.toString();

    this.db.ref('groups/' + group + '/groupDiscussion').once('value').then((snapshot) => {

      let value = snapshot.val();
      let numPosts = value.numPosts + 1;    

      // create new post-# and update number of posts in groupDiscussion
      this.db.ref('groups/' + group + '/groupDiscussion/post-' + numPosts).set(post)
      this.db.ref('groups/' + group + '/groupDiscussion/numPosts').set(numPosts);

      for(let i = 1; i < value.numPosts; i++){
        // this.db.ref('groups/' + group + '/groupDiscussion/post-' + i).set()
      }
      // console.log(post);

      // currIndex++;
      // post['postID'] = currIndex;
      // console.log(post);


    })
  }

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
}

export default Firebase;

