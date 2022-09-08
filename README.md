
# Budget Tracker:

Sign in to track your monthly expenses. Set your monthly budget and preferred currency to see how much money you have left. Users can add and delete expenses as well update their budget



**Link to project:** https://budget-tracker.up.railway.app
## Demo credentials
If you just want to try out the app, use these credentials
email: demo@demo.com
password: demodemo

- [Budget Tracker:](#budget-tracker)
	- [Demo credentials](#demo-credentials)
	- [How It's Made:](#how-its-made)
	- [Optimizations](#optimizations)
	- [Lessons Learned:](#lessons-learned)
	- [Packages/Dependencies used](#packagesdependencies-used)
	- [Installation](#installation)


![A budget planner with a few test expenses. There is a form to add a new expense](https://user-images.githubusercontent.com/78604367/188524492-5c3a6633-335d-4511-ac35-59dc073f138c.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, MongoDB, EJS, express 

This project was built by [@bycarlosgamez](https://github.com/bycarlosgamez), [@TCHProductions](https://github.com/TCHProductions), [@NPMaiorano](https://github.com/NPMaiorano), [@devd00](https://github.com/devd00), and [@20jasper](https://github.com/20jasper) from the 100Devs Agency using HTML, CSS and JS on the front end. Node.js, Express, EJS was used for the backend with the MVC paradigm, and all of the user and expense information was stored in MongoDB.


## Optimizations


This program works, however in the future it would be great to:

-add reminders list to the project for various miscellaneous tasks tied to the users budget

-build out more features for time based tracking, possibly calander GUI 

-Additionally it would be great to have comparison tools such as spending history month over month and year over year to make it easier for the user to compare different periods.

-Being able to save and download the saved budget locally through a text file or a pdf file. 

---
## Lessons Learned:

- When building an application that relies heavily on user input of data through forms it is very important to guide the user and ensure forms have requirements so the correct information is being passed in. 

- Learned how different elements of the MVC model come together and interact with each other to direct the flow of data, how rendering takes place and how to make variables available to the views from the the controllers. (devd00)

- I learnt that `Type='Number'` is required if you wish a Number to be posted to the MongoDB database.(TheCrazyHorse)

- Learned how to put an app with a database into production by allowing all IPs ~ [@20jasper](https://github.com/20jasper)

---

## Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

## Installation

- `npm install` 
- Create a `.env` file and add the following as `key: value` 
DB_STRING: `your database URI` 
---


