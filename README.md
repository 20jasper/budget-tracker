
# Budget Tracker:
This app allows users to conveniently track their expenses and budget, handy to have on the go as it can be accessed through the web at any time!!


**Link to project:** https://budget-tracker.up.railway.app

- [Budget Tracker:](#budget-tracker)
	- [How It's Made:](#how-its-made)
	- [Optimizations](#optimizations)
	- [Lessons Learned:](#lessons-learned)
	- [- Learned how to put an app with a database into production by allowing all IPs ~ @20jasper](#--learned-how-to-put-an-app-with-a-database-into-production-by-allowing-all-ips--20jasper)
	- [Packages/Dependencies used](#packagesdependencies-used)
	- [Install all the dependencies or node packages used for development via Terminal](#install-all-the-dependencies-or-node-packages-used-for-development-via-terminal)
	- [Things to add](#things-to-add)


![A budget planner with a few test expenses. There is a form to add a new expense](https://user-images.githubusercontent.com/78604367/188524492-5c3a6633-335d-4511-ac35-59dc073f138c.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, MongoDB, EJS, express 

This project was built by a team at the 100Devs Agency using HTML, CSS and JS on the front end. Node.js was used for the backend language and all of the information was stored in MongoDB. This project was built with the MVC paradigm to maximize organization. 

## Optimizations


This program works, however in the future it would be great to:

-add reminders list to the project for various miscellaneous tasks tied to the users budget

-build out more features for time based tracking, possibly calander GUI 

-Additionally it would be great to have comparison tools such as spending history month over month and year over year to make it easier for the user to compare different periods.

-Being able to save and download the saved budget locally through a text file or a pdf file. 

---
## Lessons Learned:

- When building an application that relies heavily on user input of data through forms it is very important to guide the user and ensure forms have requirments so the correct information is being passed in. 

- Learned how different elements of the MVC model come together and interact with each other to direct the flow of data, how rendering takes place and how to make variables available to the views from the the controllers. (devd00)

- I learnt that `Type='Number'` is required if you wish a Number to be posted to the MongoDB database.(TheCrazyHorse)

- Learned how to put an app with a database into production by allowing all IPs ~ [@20jasper](https://github.com/20jasper)
---

## Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

## Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

## Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 

 ---


