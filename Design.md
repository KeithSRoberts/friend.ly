# Friend.ly Design Specification

### Revised Problem Statement:

With the advent of social media, finding friends who share passions and desires should be easier than ever. However, most people still seem to have trouble finding community events, group projects, or simply finding friends in their every day life to do things with. While some people find making new friends easier, things like planning out schedules, finding shared interests, fun events or activities to attend, and subsequently communicating these plans can be difficult and deter new groups and friendships from forming. 

### Solution

At a high level, our solution is visualized to be a social-media like platform centered around the concept of “groups” in which users can both find groups to join and create groups that fit their provided interests. The users will be able to sign up and select topics or ideas that they find personally interesting, and be able to see which interests they may share with another user or a group. Along with this, the user should be able to interact with other users in their group, as well as see suggestions about what other groups may fit their interests.

Our design for our interface includes the following:

1. A sign up page for new users in which they can enter in any number of keyword-based interests that they associate with. The users can enter in whatever they please for interests, but can also select general interests that are provided by default. This page should also include an additional sign in tab/page where users who have already signed up can input their information to login. If the user does not have the credentials of a created profile, the login page will reject that login.

![register page](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/registration.png)

![signup](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/register.png)

![signin](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/sign%20up.png)

2. Once a user signs in, a dashboard view will be displayed in which users can see various groups that have been created, along with some suggestions on what groups might be relevant to the user. The user can scroll down the page and see a list of various groups that include information about them such as a group title, common interests, group description, and the number of group members. The users can click on each of the listed groups to bring them to the “group view”, which shows additional information including group members with similar interests. The users can also click an additional button on this dashboard to bring them to the “create group” page.

![recommend](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/recommend.png)

![dashboard](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/recommend.png)

3. After clicking on a listed group, the page responds to show the “group view”, in which the user can view specific information about a particular group. This view should include a list of all of the users that are part of the group, along with matching interests that those users have in common with the user. These common interests will be listed within the entry for each user in the group. The user can scroll down the list and see a little  information about each user. More detailed information about the group can be viewed here  beyond what is shown in the dashboard view. (Any ideas?). Along with this, there is a join button on this page that users can click to join the group. After joining, the join button will then turn into a leave button in which the user can click to leave the group. Pressing the back button located on this screen brings the user back to the dashboard view.

![group](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/group.png)

![groupview](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/groupview.png)

4. Users can click on a “Create group” button after which a web form pops up. The user can input information to create a new group such as the group’s name/title, the group description, and any external media such as links to social media or websites. Once they have filled out all required fields a confirmation modal appears confirming submission and can then see their newly created group in the dashboard view. Pressing the back button on this screen will bring the user back to the dashboard view.

![create](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/create_group.png)

![creategroup](https://github.com/Info442-team-2/friendly-mvp/blob/master/img/create.png)
