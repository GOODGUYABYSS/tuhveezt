# IDAssignment3 Integrated Project
Project Name: Tuhveezt

Beak Wei Xiang did not appear to push because we were sharing coding environments using liveshare on VSCode. Thus, we only needed one person to push both of our works. 

This is our to-do list app prototype with a built-in time tracker and leveling system. It is designed to combine 3 important features of productivity apps. Time tracking, task tracking, and motivation. 

This application solves a personal problem of mine and a lot of people in terms of productivity tools because of this combination. Previously, 3 apps were needed to implement all of this. Those apps are Todoist (task tracking), Toggl (Time Tracking), and Habitica (Task Gamification). This application attempts to combine all of those ideas elegantly into one tool that is effective for most users' requirements.

In this prototype, we have created the most we can with the time given. So far, we created the fundamental aspects of the application, which are time-tracking, task creation, deletion and modification, leveling and reward system (using our 3D models as the rewards for the user), and saving all these items in a database to be used later when the user goes back to the website. 


## Design Process
We decided to go for a sci-fi theme website as it looks cool.

This website is for people who wishes to improve their productivity by tracking what are the tasks that they have to do and at the same time, keep track of how much time they have spent on each task.

As a to-do list user, I always feel the need to know how much time I have spent on each task, so that I can improve productivity and ensure that I am not spending too much time one task, leaving other tasks with little to no time. 

As a time-tracking app user, I feel that there is a need to keep track of my remaining tasks to do, so that I will not only be able to just track how much time I spend on a task, but also be able to see what other tasks I have to.


## Features
- Add Task 
- View Character
- Delete Task
- Complete Task
- Time Tracking
- Edit Task
- Navbar/Hamburger Menu
- Footer Links
- Level Bar
- Rewards



### Existing Features
**Features In The Tasks Page**
- Feature 1 - Add Task Feature. This feature allows users to add tasks to the to-do list and then retrieve them when they log back on to the website.

- Feature 2 - Delete Task Feature. This feature allows users to delete tasks that they do not want as part of their to-do list anymore. This feature is not to be mistaken with the Complete Task feature, which is similar in that it makes the task disappear in the "tasks" section.

- Feature 3 - Complete Task Feature. This feature allows users to mark a task as complete. Tasks marked as complete will appear in the "Completed Tasks" section, where users can see how much time they spent on the task and they will have an option to delete it.

- Feature 4 - Time Tracking Feature. This feature allows users to track the time spent on each individual task. They have the option to pause the time-tracking if they pause their task. The time tracked for each task is saved in the database so when users log in again, they can continue where they left off in how much time they spent on the task.

- Feature 5 - Edit Task Feature. This feature lets users edit an existing task. To edit a task, they click on the textarea of the "edit task" section, name a task, and then click on the edit button beside the task.

**General Features**
- Feature 6 - Navbar/Hamburger Menu. Users can use this to navigate the website between the home page, tasks page, and rewards/xp/levels page.

- Feature 7 - Footer Links. These link to the website's fictional social media, which will be used for marketing the website. Currently, the website's social media has not been implemented, but will be implemented in future versions.

**Features In The Rewards Page**
- Feature 8 - Level Bar. When users complete a task, they gain 20xp (experience points), which will reflect on the level bar. Once users reach 100xp, they will level up by 1 level

- Feature 9 - Rewards. When users reach levels 2 and 5 respectively after completing tasks, they will earn a reward. More rewards will be added in future implementations of the website. Currently, the rewards are two futuristic planes, since this website is science-fiction themed.

### Features Left to Implement
- Lottie Animation when loading page - This feature displays a Lottie animation when the page is loading. The Lottie animation disappears when the page has been fully loaded

- Timetable - This feature displays a timetable showing what tasks were completed during the day. For example, if a task was done between 1 p.m. and 3 p.m., the timetable will display a rectangular block over that period in the timetable showing the task name and duration of the task.

- Projects - This feature allows users to sort their tasks within projects. For example, users can sort all of their ASG3 tasks in a project called "ASG3".

- Skills - This is similar to projects, although skills have their own level bar separate from the main level bar in the Rewards page. This makes the to-do list feel more like a game in that you can have different statistics to level up in. For example, users can link all school related tasks in a skill called "education" and gain "education" experience points everytime they do a task related to education.


## Technologies Used
Bootstrap
RestDB
Jquery
fontawesome(icons for socials)


## Testing
This website is only built for desktop website browsers.

When bridging the website to the RestDB database, I had to think of what types of data I would need. For example, for our gamification idea of the website, we knew that we needed xp and levels, but did not know how we are going to display it and also how we are going to post the data to the database. Hence, when we were doing the gamification part, we had to really think through each step from knowing what types of data we need, creating the data and to displaying the results to our website. 


## Credits
Christian Alexander BB's contributions:
- Main contributor of the website's frontend
- Created the design and structure of the pages with HTML, CSS, Bootstrap, and some jQuery
- Created the hamburger menu and links to different pages
- Implemented the stopwatch feature visuals (such as real-time time tracking) for each individual task

Beak Wei Xiang's contributions:
- Main contributor of the website's backend
- Created the database with the necessary collections and fields needed for the website 
- Bridged the database to the website 
- Coded to GET, POST, PUT information to the database with the website

### Content
https://use.fontawesome.com/releases/v5.0.8/js/all.js --> for social media icons



### Media
- Logo made by Beak Wei Xiang in Adobe Illustrator

- Cyberpunk City Background Page : First Background Image on Page 1 (index.html)
  - website link: https://www.kolpaper.com/10469/city-night-landscape-wallpaper/
  - direct link: https://www.kolpaper.com/wp-content/uploads/2020/05/City-Night-Landscape-Wallpaper.jpg
  
- Space Background Page: Second Background Image on Page 1 (index.html)
  - website link: https://wallpapersafari.com/w/F5zabg
  - direct link: https://img.wallpapersafari.com/desktop/1440/900/52/33/F5zabg.jpg

- Play Button and Pause Button: https://github.com/tinloof/gold-stopwatch/tree/master/icons


### Acknowledgements
References for certain programming aspects:
- Vertical Align To Center - https://medium.com/front-end-weekly/absolute-centering-in-css-ea3a9d0ad72e
- Logos - https://use.fontawesome.com/releases/v5.0.8/js/all.js
- Side Navigation Bar - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
- Checkbox - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox
- Gradient Creator - https://cssgradient.io/
- Stopwatch Tutorial - https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/


## Website Link
https://weixiangbeak.github.io/tuhveezt/


