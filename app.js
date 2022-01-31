require("dotenv").config();
// ! dotenv import must be above all other imports

const Express = require("express");
const app = Express();
/*
 * First we create a variable to import express from node modules folder into our file using require() method.
 * Creating top level function Express() to gain access to all of its methods and properties:
 * HTTP requests
 * middleware functionality
 * basic app settings
 */

const controllers = require("./controllers");
const dbConnection = require("./db");
const middleware = require("./middleware");

app.use(Express.json());
// Recognizes and handles incoming requests as JSON objects. It's a middleware that parsees JSON.

app.use(middleware.CORS);
app.use("/user", controllers.usercontroller);

dbConnection
  .authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(4000, () => {
      console.log(`[server]: app.js is listening on 4000`);
      // console.log(process.env) // shows all loaded variables that exist in process.env
    });
  })
  .catch((err) => console.log(err));
