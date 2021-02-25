## React-Redux Application

An application used to show users data in table format built with React, Redux, JavaScript,react-bootstrap and CSS.


## Project Screen Shot(s)

https://github.com/Rebeiro-Darwin/react-redux-app/tree/master/screenshots

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Reflection
The technologies implemented in this project are React 17, Redux and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup.

This application includes below features
1) Display of data in table format.
2) Clicking on any table cell will display 2 buttons: **Save** and **Cancel**.
3) While editing a cell, if we click on any other cell then the changes will be discarded.
4) Upon editing the table cell: clicking on **Save** will call the API and notification message will be displayed based on the API response.
5) On click of **Cancel** button, edit mode will be cancelled.
6) Created reusable component to display different notification messages based on API response for updating table data.
