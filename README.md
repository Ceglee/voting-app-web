# Voting web app

This part of the project stores implementation of the fronted application.

### 1. Technology stack
Newest angular js version was used to build this project, as css processor SASS has been user. Bootstrap was used as main CSS framework.

### 2. Available applications
There are two apps which can be built in this project.

1. Create user app - simple application which is used to create new users.
2. Vote app - main application responsible for managing votes.

Login page finally was created as static html, because of issues with Angular and the way how it is treating \<form> tags.

### 3. Time was biggest enemy
Because of lack of the time, I was not able to implement all initially planned functionalities.  
What is missing?
- form validation - there is no validation on inputs, so user can type anything
- only basic http error handling response was implemented and not in all places. The best way to check what went wrong is to 
check request in dev tools. 99% of these issues are validation fail performed by backend app or value breaks one of database constraint (Not null or unique).
- only default web browser datepicker is used.

