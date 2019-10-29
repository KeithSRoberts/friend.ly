# Friend.ly Architecture & Components

### Search Bar Component
*Source files: components/searchBar.js, components/search.js, components/searchResults.js
*This component will handle all searching and editing the DOM to show search results. This component retrieves all groups from our database, and filters them based on the users query. Upon pressing the search button (searchBar.js), the user’s search query is used to filter the list of all groups from firebase down to relevant matches (using search.js). The relevant matches are populated in the DOM using searchResults.js.
*The components interact with the Dashboard views, as well as group views such that the user is shown a group’s page when they click on that group.
*The search bar UI resides on the client side, but our searching code will reside on the server-side, such that searching for groups does not slow down client computers as we scale.

### Sign-up & Sign-in View
*Source file: components/verifyUser.js
*The responsibility of verifyUser.js is to handle all log-in and sign-up functionality on our site. Users can type in a username and password and click “login”,or “signup” to create a new account. For user accounts and verification, we will utilize the Firebase Authentication SDK on our backend.
*The component must interact with the dashboard view to show the user that they are currently signed into the account. It should also interact with the other views to provide the current user’s username and userID once they are signed in.
*The UI flow is setup on the client side, but the authentication is all handled on the server-side through Firebase.

### Dashboard View
* Source file: components/groups.js
* The responsibility of this component/view is to serve as a central/home page of our application and to present the user with a list of recommended groups and a list of arbitrary groups to browse through. This component should retrieve data about groups from our database and display them to the user in the user-interface.
* This component will need to be connected to the navbar component in that the navbar will provide functionality to select the dashboard view to be displayed. This component will also be connected to a couple other components by simply having a reference to the other components. In specific, the dashboard view will bring the user to the group view when a group entry is selected from the presented lists. Lastly, the dashboard will be connected to our firebase component in order to request group data.
* The dashboard view resides entirely on the client-side of the application

### Group View
* Source file: components/viewGroup.js
* This responsibility of this component is to present the contents and information of a single Group to the viewer. This component also should show the list of members within the group as well as posts in the discussion board. This data will be retrieved from our database and displayed to the user in the user interface. The component will allow the user to update the group description and add group members. 
* This component will communicate with the firebase component in order to request and add member data as well as information about the group. The group view component will also communicate with the discussionBoard component in order to retrieve and display the contents of the discussion board. This component will also need to be connected to the dashboard by having a reference to it in order to return to the dashboard view. 
* This group view resides completely on the client-side of the application

### Create Group Form
* Source file: components/createGroup.js
* The responsibility of this component is to allow the user to create a new group and input a new title, description, and links relevant to the group. The user can then click the submit button to create a new group or click the cancel button to return back to the dashboard. 
* This component will need to be connected with the groups component so that it can be accessible from the dashboard view. The component only needs to communicate with groups as a reference and doesn’t communicate any other information. It also needs to communicate with the Firebase component the details of the new group including title, description, and links in order to create the group within the database. 
* This component resides on the client-side of the application

### Discussion board Component
* Source file: components/discussionBoard.js
* The responsibility of this component is to contain all the posts made by users and to update to include new posts made by other users. Users will also be able to add a new post to this component by clicking on the “Create post” button. 
* This component will communicate with the createPost component by referencing it when the user clicks on the “Create post” button, which will then pop up the other component for the user. This component will also communicate with the Firebase component in order to query all the posts it currently stores as well as add new posts that have been recently added by other users. 
* This component resides on entirely on the client-side of the application

### Create Discussion post view
* Source file: components/createPost.js
* The responsibility of this component is to provide an interface for users to be able to create a new discussion post and add links and text that will be displayed on the discussion board. 
* This component will communicate with the Discussion board component only as a reference when the user clicks on the “Create post” button, which will show this component to the user. This component will also communicate with the Firebase component in order to write data and add a new post into the database. 
* This component resides on entirely on the client-side of the application

### Navbar Component
* Source file: components/navbar.js
* The primary responsibility of the navbar components is to provide a continuous point of reference for the user to navigate between different views/pages. The navbar will have all of the buttons and functionality needed for the user to activate search, return to the dashboard, navigate to the create group form, and to view their profile.
* This component will connect to most other view/page components, as it provides links to navigate between other views and pages. The navbar will need to connect with the dashboard view, the profile view, the search bar component, and the createGroups component. This component will be in charge of displaying one of these components to the user depending on which of it’s buttons are pressed/selected.
* This component resides entirely on the client-side of the application

### Profile View
* Source file: components/account.js
* The responsibility of this component/view is to allow the user to make and save changes to their user profile details. Here the user can change their email, username, password and interests and persist those changes to the database if the updated profile data is valid.
* This component will need to be connected to the navbar component so the user can click an icon in the navbar to be redirected to the profile view page. The account component will also be connected to our firebase component in order to read user profile data from and write updated user profile data to the database.
* The profile view resides entirely on the client-side of the application

### Firebase
* Source files: firebase/auth.js, firebase/db.js, firebase/firebase.js, firebase/index.js
* The responsibility of the firebase components is to connect the firebase database to the app and define API functions to read and write queries to the database. Auth.js handles all functions related to user accounts including creating a new user, signing a user in and signing a user out. Db.js will define functions for retrieving objects from the database to be rendered in app views (such as user profiles, groups and group members) and for writing objects to the database (such as creating a group and updating a user profile). Firebase.js configures the firebase connection with an api key. Index.js exports the other firebase files so that they can be used by other components in the app.
* This component will need to be used by the groups, view group and account components so that they can render content stored in the database, the create group, account and signup components so that they can write objects to the database, and finally the sign in and sign up components so that they can check if the user is allowed to perform certain actions.
* The firebase components will be on the back-end of the application and the user will never interact with the firebase components directly.
