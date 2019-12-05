# Friend.ly Requirements Specification

### Final Requirements:

#### User Registration/Sign-in:

* All sensitive user data such as username/password will be stored in a SHA-256 encrypted Google Firebase key-value store. **COMPLETE**
* Non-logged in users will be greeted with a splash page with two text-fields (username and password) and two buttons (sign-up and login) **COMPLETE**
* After the user enters a valid username and password and clicks/taps on the login button, they will log into their account and be redirected to the dashboard page **COMPLETE**
* If the user enters an invalid username and password and presses login, an error message will be displayed above the inputs notifying them that they have entered an invalid username or password. **COMPLETE**
* After the user enters a username and password and clicks/taps on the sign-up button, they will be redirected to the ‘enter interests’ page when they finish their registration if the username is not already taken. If the username is already in use, an error message is displayed above the input fields asking the user to select a different username. **COMPLETE**
* The ‘enter interests’ page will have token input fields for each of these categories: TV/movies, books, video games, sports, music and other. The user will be able to input whatever they like about their interests into these token input fields, and there will be no limit to how many interests the user can input. The ‘enter interests’ page will also have a ‘sign-up’ button that will make an account for the user when pressed, automatically log them into the newly created account, and redirecting them to the dashboard page.

**REVISED**: Instead of having all token inputs displayed at once, the user can instead click on a corresponding icon for each category to be brought to the token input for that category. All other functionality is according the requirement otherwise.
* After a user signs in for the first time, they will be greeted by a short paragraph describing what a group is and explaining how to create a group. (“Click on the ‘Create’ button to start your first group. 

**REMOVED**: We felt that the create group form was intuitive enough for the user to understand how to create their group and what content is involved. The short paragraph would have simply added more clutter to our dashboard when the user first signs in.

##### Verification:
* As the UI for the User Registration & Sign-in is being built, we will be systematically testing that the site is functional by manually going through registration/sign-in process in the browser to ensure that users are able to successfully create accounts/sign-in by inputting e-mails, passwords (and interests for registration) with all the expected behavior detailed above (error messages for bad input etc.).
* We will also use assert() statements in our API around every call to the database to ensure that the type of the response from the database is a non-empty JSON object.
* When running our client locally (`npm start`), if any assert should fail it will crash our local instance which will immediately notify us that something unexpected happened. We will then inspect console out to pinpoint which assert failed, and inspect the database to determine if the values we expected are indeed present.
* We will use the metric of all assert() statements passing and the ability to go through the entire registration/sign-in process without errors or unexpected behavior multiple (at least 10) times as means to verify correctness.
* The main team member in charge of verifying the correctness of user registration and sign-in is **Kyler Griffith**

#### User Profiles:

* Logged in users will have access to their own ‘Profile’ page which will have editable text-fields for username and password and token input fields for their interests. **COMPLETE**
* If a user makes a change to their profile page (editing any of the text/token fields), they can persist those changes by clicking the ‘Save Changes’ button located at the bottom of the ‘Profile page’. **COMPLETE**
* Users can also view other users’ profile pages by clicking on another user’s username (which will redirect them to that user’s profile page). These profile pages will be read-only (not editable by the user) and the password field will be absent. **COMPLETE**

##### Verification:
* Like registration/signin, the user profile page will need to make calls to the database should the user make changes to their own
profile details. As such, assert() statements in our API will be used to verify that the response from the database is a non-empty JSON object (and will crash the program if this is not true).
* As the user profile is being built, manual tests in the browser will verify that the user can only edit their own profile - and that if the user makes changes without saving those changes will not still persist on the page if the user leaves and returns to their profile (and vice versa).
* We will use the metric of all assert() statements passing and the ability to edit and save user profile details without errors or unexpected behavior multiple (at least 10) times as means to verify correctness.
* The main team member in charge of verifying the correctness of user registration and sign-in is **Kyler Griffith**

#### Search Feature:

* User can search groups via a search bar on the site, located at the top of the dashboard in the nav-bar, where they can enter a string to be shown groups with names that match the provided input after pressing the search button to the right of the bar. A group is considered matching if the provided search string occurs somewhere in the title of the group. **COMPLETE**
* The user will be presented with a search results page consisting of a list of card entries for each relevant group that matches, which they can scroll down. The search results section no longer scrolls down when there are no more matching results. **COMPLETE**
* Users will be able to visit a group’s page from the results by clicking/tapping on its card entry, which will bring the user to the group page/view for that group **COMPLETE**
* Users can click on a navigation button at the top left of the results page to navigate back to the dashboard page from the search results page.

**REVISED**: Instead of having users navigate back to the dashboard via a back button, we allow users to instead navigate to the dashboard or elsewhere via the navbar at the top of the page to avoid having to store a history of what the previous page the user was at.

##### Verification:

* We will be verifying the search feature works properly by manually inputting different strings and confirming that the proper matching groups show up. We will also test with nonmatching strings to ensure that no groups show up in the results. In addition, we can have assertions within our code to make sure that only valid strings can be inputted into the search bar.
* After the search results are populated in the dashboard view, we will verify that all the information about each group shows up in the groups's card by visually comparing the string and the matching groups.
* Navigation to the group view and back to the dashboard will be manually tested by clicking through our UI buttons on the group cards and the back button to visually identify that the correct view shows up.

#### Groups Feature:
* A list of 10 groups will be displayed on the dashboard view. Additional groups can be seen by clicking on the right arrow at the bottom of the list. This will then display the groups numbered 11-20. Users can return back to the original page by clicking the left arrow at the bottom of the list. If there are no more groups left to navigate to, then the corresponding arrow will turn opaque that will not be able to be clicked. 

**REVISED**: Instead of displaying groups based on pagination, we decided that it would be better to simply let the user scroll through a single list infinitely for all of the groups. Part of our reasoning being that we already have a search feature for users to find specific groups, and that pagination would have been unecessary work for the users to click through.
* The user can click on a card entry for any of these listed groups to go to the “group view” for that group. The group view displays the group title at the top of the page, followed by the description underneath, and then any group url links if they were provided after that. The user can scroll down further to view the central discussion board within the group. Along with this, the user can scroll down further to see a list of the members names within that group. 

**REVISED**: The group view also now includes a group image instead of group url links to give the group view more content/personalization. Instead of having the discussion board come sequentially afer the members board on the page, we decided to have a button to switch between the members board and discussion board since adding members would cause the discussion board to render further and further down the page. This made it easier for users to get the particular group content they were looking for, rather than needing to scroll down a members list everytime.
* Users can create a group by clicking on the “create” button provided at the top of the application in the nav-bar. This will pop up a form modal with text-input fields for group title, group description, and group links. The user can enter up to 50 characters for the title, 400 for the description, and 50 for each link field. Once the user has filled out a title and description field, the user can submit the form by clicking on the submit button at the bottom of the form, or cancel the creation by clicking on the cancel button to the left of the submit button to bring them back to the dashboard view. 

**REVISED**: The user can instead enter 40 characters for a title and 200 characters for a description in order to better fit the representation of the group metadata in both the dashboard view and group view cards. The longer character lengths would cause the text to become difficult to represent in both of the views while including other content on those pages. The user can have up 10 different interests entered for each category in the group form. Instead of having a cancel button next to the submit button, we allow users to instead navigate to the dashboard or elsewhere via the navbar at the top of the page to avoid having to store a history of what the previous page the user was at. The form does not submit and is cancelled if the user navigates away from the form.
* When viewing the list of groups displayed in the dashboard view, the user can join a group by clicking on the “Join” button located on the top right corner of each group entry if the user has not already joined the group. When the user clicks the button to join, they are added as a member of that group, and the join button becomes a “leave” button. 

**REVISED**: Instead of being able to join the group from a button on each card in the dashboard view, the user must click on the card and navigate to the group view to join the group with the button included on that page. This choice was made due too reasons surrounding efficiency of rendering the dashboard in that the addition of the button would have required an additional query to check if the user is in each group displayed on the dashboard, causing a much slower load time especially when there were many groups displayed on the dashboard.

* Groups will have a central discussion board in which users can make posts. Once the user joins a group, they will be able to see and click on a button at the top of the discussion board that says “Create Post”. Upon clicking the button, a modal will pop up with text fields for “Title” and “Description”, along with optional fields for “Location” and “Links”. The title will allow a maximum of 50 characters, 400 for description, and 100 for location and links fields. Once the user has filled out a title and description field, the user can publish the post by clicking on the “Submit” button at the bottom of the form, or cancel it by clicking on the “Cancel” button at the bottom of the form to the left of the submit button to exit back to the group view. (**Complete**)


**REVISED**: We decided to remove "location" and "links" fields as they did not seem to be necessary when putting information into the post, as all this info can just be typed into the "description" field. In addition, this makes the "Create a post" modal look much simpler and cleaner. However, all the other parts of this requirement have been met. 

* The user can navigate back to the dashboard view by clicking on the left arrow at the top left of the page within the group view. 

**REVISED** As mentioned in a previous revision, the user no longer navigates back via a back button, but should instead use the navbar located at the top of the screen to navigate to the dashboard or elsewhere.
* When viewing the list of groups displayed in the dashboard view, if the user already belongs to a group, they can leave that group by clicking on the “Leave” button located on the top right corner of that group entry. When the user clicks the button to leave, they no longer are part of that group and the button becomes a “join” button. 

**REVISED**: Instead of being able to leave the group from a button on each card in the dashboard view, the user must click on the card and navigate to the group view to leave the group with the button included on that page.

##### Verification:
* The display of the groups on the dashboard view will be primarily tested manaully. We will systematically go through the process of viewing the dashboard, confirming a list of 10 groups are displayed, confirming that the user can page through the list of groups and click on a group card to be brought to the group view for that group. Although, we will also have assertions in our code to verify that the group data is successfully passed to the group view when calling our API, as this is critical to displaying the groups list.
* Navigation between the group view, create group form, create post form, & dashboard will all be manually tested through clicking through our UIs buttons
* Creating a group via the create group form will have client side and server side validation of the user-submitted data to ensure the data can be stored properly. Creating a discussion post on a group will follow the same validation to ensure no errors arise from our data. We will provide further verification of our data flow and APIs through assertions that will check that the user has submitted inputs that are within required length and input type. Users will not be able to submit a form to create a group or create a discussion post for a group without passing this validation.
* The entire process of creating a group and then subequently viewing the group, as well as posting to that group will all be tested by the owner of this component, by going through the entire process manually and confirming that the group is viewable after creation along with the newly created post. This will be confirmed/validated further by checking that the data for that group/post is stored when performing the test.
* Joining and leaving a group will be tested in a similar manual fashion, in which the owner will verify that they can click join and be added to that group. We will also confirm that you can click leave and you will no longer be part of the group. The owner will further confirm this by checking the stored data and confirming that the user is added to that groups data and removed accordingly.
* As previously mentioned, our APIs for creating groups/posts will include validation, but will also be automatically tested against 5 different possible payloads of data (2 correct, 3 incorrect).These tests will ensure no data will corrupt our application, and give us assurances about the format of data we will display and use throughout other places in the application.

#### User Interface:
* Prioritize the color purple for any main interaction element: like the join button in group view page **COMPLETE**
* Any rounded edges should be 15px **COMPLETE**
* Any opacity settings should be 40% only **COMPLETE**

##### Verification:
* The majority of user-interface requirements will be confirm simply through the css, and confirming that our css properties confrom to our requirements.
* The CDO will also be in charge of verfiying that each page/components UI matches what was outlined in our design document

