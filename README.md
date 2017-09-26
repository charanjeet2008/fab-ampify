# My project's README
Installation Steps
=====
```
npm install
npm run api
npm start
```
Design
====
**Controllers/**

Each module has a separate controller in here, that 

- handles the incoming request

- processes the input params

- calls any api[s] required

- passes the view related variables to a View
 
 **Helpers/**
 - It has helper functions for the respective controller file. 
 
 **Views/**
 Each module has a separate directory underneath, that
 - has an index.ejs. 
 - index.ejs joins the partials.
 - Partials/ has files respective to UI components on the webpage
 
 **apiRequester.js** 
 It is a single point to make all API hits from fabamp. 
 
 **constants.js**
 It defines the global constants for the app.
 