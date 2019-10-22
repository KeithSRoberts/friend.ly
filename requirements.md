# Friend.ly Requirements Specification
## By Brian Kim, Leo Kwo, Keith Roberts, Anuraag Polisetty

### Final Requirements:

#### User Registration/Sign-in:

* All sensitive user data such as username/password will be stored in a SHA-256 encrypted Google Firebase key-value store.
* Non-logged in users will be greeted with a splash page with two text-fields (username and password) and two buttons (sign-up and login)
* After the user enters a valid username and password and clicks/taps on the login button, they will log into their account and be redirected to the dashboard page
* If the user enters an invalid username and password and presses login, an error message will be displayed above the inputs notifying them that they have entered an invalid username or password.
* After the user enters a username and password and clicks/taps on the sign-up button, they will be redirected to the ‘enter interests’ page when they finish their registration if the username is not already taken. If the username is already in use, an error message is displayed above the input fields asking the user to select a different username.
* The ‘enter interests’ page will have token input fields for each of these categories: TV/movies, books, video games, sports, music and other. The user will be able to input whatever they like about their interests into these token input fields, and there will be no limit to how many interests the user can input. The ‘enter interests’ page will also have a ‘sign-up’ button that will make an account for the user when pressed, automatically log them into the newly created account, and redirecting them to the dashboard page.
* After a user signs in for the first time, they will be greeted by a short paragraph describing what a group is and explaining how to create a group. (“Click on the ‘Create’ button to start your first group.

#### User Profiles:

* Logged in users will have access to their own ‘Profile’ page which will have editable text-fields for username and password and token input fields for their interests.
* If a user makes a change to their profile page (editing any of the text/token fields), they can persist those changes by clicking the ‘Save Changes’ button located at the bottom of the ‘Profile page’.
* Users can also view other users’ profile pages by clicking on another user’s username (which will redirect them to that user’s profile page). These profile pages will be read-only (not editable by the user) and the password field will be absent.


#### Search Feature:

* User can search groups via a search bar on the site, located at the top of the dashboard in the nav-bar, where they can enter a string to be shown groups with names that match the provided input after pressing the search button to the right of the bar. A group is considered matching if the provided search string occurs somewhere in the title of the group.
* The user will be presented with a search results page consisting of a list of card entries for each relevant group that matches, which they can scroll down. The search results section no longer scrolls down when there are no more matching results.
* Users will be able to visit a group’s page from the results by clicking/tapping on its card entry, which will bring the user to the group page/view for that group
* Users can click on a navigation button at the top left of the results page to navigate back to the dashboard page from the search results page.

#### Groups Feature:
* A list of 10 groups will be displayed on the dashboard view below recommended groups. Additional groups can be seen by clicking on the right arrow at the bottom of the list. This will then display the groups numbered 11-20. Users can return back to the original page by clicking the left arrow at the bottom of the list. If there are no more groups left to navigate to, then the corresponding arrow will turn opaque that will not be able to be clicked. 
* The user can click on a card entry for any of these listed groups to go to the “group view” for that group. The group view displays the group title at the top of the page, followed by the description underneath, and then any group url links if they were provided after that. The user can scroll down further to view the central discussion board within the group. Along with this, the user can scroll down further to see a list of the members names within that group.
* Users can create a group by clicking on the “create” button provided at the top of the application in the nav-bar. This will pop up a form modal with text-input fields for group title, group description, and group links. The user can enter up to 50 characters for the title, 400 for the description, and 50 for each link field. Once the user has filled out a title and description field, the user can submit the form by clicking on the submit button at the bottom of the form, or cancel the creation by clicking on the cancel button to the left of the submit button to bring them back to the dashboard view.
* When viewing the list of groups displayed in the dashboard view, the user can join a group by clicking on the “Join” button located on the top right corner of each group entry if the user has not already joined the group. When the user clicks the button to join, they are added as a member of that group, and the join button becomes a “leave” button.
* Groups will have a central discussion board in which users can make posts. Once the user joins a group, they will be able to see and click on a button at the top of the discussion board that says “Create Post”. Upon clicking the button, a modal will pop up with text fields for “Title” and “Description”, along with optional fields for “Location” and “Links”. The title will allow a maximum of 50 characters, 400 for description, and 100 for location and links fields. Once the user has filled out a title and description field, the user can publish the post by clicking on the “Submit” button at the bottom of the form, or cancel it by clicking on the “Cancel” button at the bottom of the form to the left of the submit button to exit back to the group view.
* The user can navigate back to the dashboard view by clicking on the left arrow at the top left of the page within the group view. 
* When viewing the list of groups displayed in the dashboard view, if the user already belongs to a group, they can leave that group by clicking on the “Leave” button located on the top right corner of that group entry. When the user clicks the button to leave, they no longer are part of that group and the button becomes a “join” button.

#### Recommendation feature:

* The system displays groups to the user on the dashboard view as recommendations at the top of the page. The user can click/tap on a card entry for a group in order to bring them to the group page of that group as if they were any other group displayed on the dashboard.
* Potential recommendations for groups will be included by the system based on how many members share a common interest in that group
* A recommended group entry displayed to the users will have at least one member in that group with a common and shared interest. 
* The recommended group will display the number of members with common interests on each group entry in the bottom right corner of the card entry, labeled by “Members with shared interests”
* The system will prioritize showing recommendations that have more common interests by placing these recommended groups closer to the top of the recommendations

#### User Interface:
* Prioritize the color purple for any main interaction element: like the join button in group view page
* Any Gaussian blur effect should be 70px
* Any rounded edges should be 15px
* Any opacity settings should be 40% only

