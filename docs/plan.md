# Friend.ly Development Plan

### Work Coordination:
The two project managers that are tasked with handling scheduling and planning of all development processes are *Keith and Anuraag*.
The project management practice we are going to simulate in our project is a modified version of Agile, in which we are going to divide our project’s work across sprints. Each sprint will last for a week, and will have the primary goal of completing a logical “vertical slice” of work, which will translate into completing a functional feature of our app. The one exception to this is the first sprint, to which we will attempt to complete a single “horizontal slice” of laying out the front-end of each component/page involved with out application. After having the front-end laid out from our first sprint, we will move into completing our application, piece by piece, implementing functionality for a new part each week. Each week will have a retrospective & planning meeting, where we will discuss what problems, successes, and blockers arose in our previous sprint, and then subsequently plan our next sprint based off of our retrospectives. 

### Weekly Meetings
Weekly meetings to discuss our previously completed sprint and plans for our upcoming sprint will be held Tuesday before class, either through slack or in person outside the classroom depending on availability of that week. Any additional meetings needed will be planned on an ad-hoc basis, and will be planned according to the hours each member has provided as available in our availability chart by one or both of the program managers.
The agenda of these weekly meetings will be as follows:
- Stand-up: each member takes a turn describing the work they did over the previous sprint, including any details about completion, blockers, or any requests for additional feedback from other group members. This will last approximately 10-20 minutes.
- Sprint discussion: depending on what was successfully completed in the previous sprint, this time will be used to discuss what we will work on in the upcoming sprint for the next week. While we have a timeline of particular work that we plan to complete week-by-week, this time will be used to determine whether or not we need to modify this timeline slightly. Since our timeline of work is flexible, we can choose to move any uncompleted tasks to our next sprint but should be only done if needed.
- Assign tasks: after detailing all of the work that will go into the “vertical slice” for our next sprint, we will sit down and actually write these tasks into tickets on our group Kanban board hosted in Slack. We will then assign the tickets on our Kanban board accordingly, and each group member will be responsible for updating and managing that ticket for the next sprint.

### Communication & Planning Tools
As briefly mentioned in the previous section, we will be handling all communication amongst members about sprints through Slack and in-person meetings. Since had already been using Slack to communicate about the project & assignments, we felt that this channel of communication was sufficiently providing us with what we needed to be successful in completing our tasks. On top of this, we are also going to use a plug-in called Workstreams, which allows us to have our own private Kanban board to manage tasks/tickets hosted within the same Slack channel we used to communicate. This was highly desired as it leaves us with only one place that we need to visit to do all communication and management around our project. Other alternatives to this Kanban technology would be something like JIRA or Trello, which offer more robust functionality around project planning. Nonetheless, these two alternatives seem a bit overkill for our project size and would require us to make a seperate account & project in a separate application.

### Component Ownership
We have divided our application into various technical components below. We have also assigned each component to one group member, to which that member will be in charge of confirming and verifying the completion, functionality, and correctness of that particular component.
* Search bar component - Brian
* Dashboard view - Brian
* Navbar component - Brian
* Group view - Keith
* Create group form - Keith
* Discussion board component - Anuraag
* Create post form -Anuraag
* Sign-up / Sign-in view - Kyler
* Profile View - Kyler
* Firebase - Kyler

### Development Timeline
We have laid out a flexible timeline of when/what we expect to complete within our application at a certain point in time:
* Week 1: User interface for all components and router/navbar
    - Layout of JSX and CSS for each component according to designs
    - Routes for each page, and redirect to pages via icons in navbar
* Week 2: Functionality for users registration/login w/ firebase
    - Users can create accounts and login
    - Users are redirected to dashboard on login
* Week 3: Functionality for group creation and viewing
    - Users can view a list of all groups, and can view page for a group
    - Users can fill out and submit group creation form, upload an image to the database, and are added to it
    - Users can see what interests members of a group have in common with them
* Week 4: Functionality for discussion boards & group search
    - Users can view & post to a group discussion board
    - Users can search using the search bar
    - Users can see search results based on their search
* Week 5: Functionality for users to update profiles/credentials
    - Users can change their interests/profile
    - Testing as needed and leeway for unexpected bugs

### Verifying Components
Verification of correctness, functionality, and completion for each detailed component will be different depending on the particular component. Most components will be able to be sufficiently verified through manual testing and QA. Some components that handle core functionality involved with our application may need additional verification, such as automated tests. On top of testing of each component, all code will be pull-requested and merged by another group member so that code is reviewed by at least one other pair of eyes before being checked in. The criteria for verifying each component is included in that components requirements in the requirements document.
