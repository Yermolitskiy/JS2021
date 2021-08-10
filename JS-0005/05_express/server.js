const express = require("express");
const path = require("path");
// const MainController = require("./app/controllers/MainController");
const StudentsController = require("./app/controllers/StudentsController");

const server = express();

// const routes = {
//     'students': 'Students',
//     'courses': 'Courses',
// };
// // lcoalhost:3000/anything ==> req.page = 'anything'
// // lcoalhost:3000/qwerty ==>
// server.get("/:page", function (req, res) {
//     const { page } = req.params;
//     const returnData = routes[page] ?? 'Not found';
//     res.send(returnData);
// })

// set templating engine
server.set("view engine", "ejs");
// change default location of templating engine views
server.set("views", path.resolve(__dirname, "app/views"));

// express.static
/**
 * --> server.uses("assets/main.css", function (req, res) { return the file })
 * --> "assets/main.js"
 */
server.use(express.static(path.resolve(__dirname, "assets")));

// routing
// server.use("*", MainController);

server.get("/", function (req, res) {
  // res.send("Home");
  res.render("pages/index");
});
server.get("/students", StudentsController);

server.use("*", function (req, res) {
  res.send("Error 404");
});

const port = 3000;
// start server
server.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
