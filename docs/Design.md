# Friend.ly Design Specification

### Revised Problem Statement:

With the advent of social media, finding friends who share passions and desires should be easier than ever. However, most people still seem to have trouble finding groups with like-minded people and new friends. This can make it difficult for people to get involved in new communities or find new team members for school / extracurricular projects.

### Solution

At a high level, our solution is visualized to be an organization directory like platform centered around the concept of “groups” in which users can both find groups to join and create groups that fit their provided interests. The users will be able to sign up and select topics or ideas that they find personally interesting, and be able to see which interests they may share with another user or a group. Along with this, the user should be able to see suggestions about what other groups may fit their interests.

Our design for our interface includes the following:

1. A sign up page for new users in which they can enter in any number of keyword-based interests that they associate. The users can enter in whatever they please for interests in the form token input fields, but can also select general interests that are provided by default. This page should also include an additional sign in tab/page where users who have already signed up can input their information to login. If the user does not have the credentials of a created profile, the login page will reject that login. For MVP, the user will only be able to input their interests on signup, having the user change their interests after registration is a stretch goal.


![register](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/register.jpg)

![signup](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/signup.jpg)

2. Once a user signs in, a dashboard view will be displayed in which users can see various groups that have been created, along with some suggestions on what groups might be relevant to the user. The user can scroll down the page and see a list of various groups that include information about them such as a group title, common interests, group description, and the number of group members. The users can click on each of the listed groups to bring them to the “group view”, which shows additional information including group members with similar interests. The users can also click an additional button on this dashboard to bring them to the “create group” page.

![recommend](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/recommend.jpg)

3. After clicking on a listed group, the page responds to show the “group view”, in which the user can view specific information about a particular group. This view should include a list of all of the users that are part of the group, along with matching interests that those users have in common with the user. These common interests will be listed within the entry for each user in the group. The user can scroll down the list and see a little  information about each user. Along with this, there is a join button on this page that users can click to join the group. After joining, the join button will then turn into a leave button in which the user can click to leave the group. Pressing the back button located on this screen brings the user back to the dashboard view.

![group](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/group.jpg)

![groupview](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/groupview.jpg)

![groupview](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/dark.jpg)

4. Users can click on the ‘search’ button on the top of the page to start searching. They can either search for specific groups based on keywords. Or they can search for existing users based on keywords. They can exit search by clicking on the ‘x’ button next to the type field.

![search](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/search.jpg)

5. Users can click on a “Create group” button after which a web form pops up. The user can input information to create a new group such as the group’s name/title, the group description, and any external media such as links to social media or websites. Once they have filled out all required fields a confirmation modal appears confirming submission and can then see their newly created group in the dashboard view. Pressing the back button on this screen will bring the user back to the dashboard view.

![creategroup](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/create.jpg)