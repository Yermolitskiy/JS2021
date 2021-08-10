// creating a simple http serverCookie
// importing the HTTP library from node
// the same as we did with the external file:
const http = require("http");
// include a file system library from node
// const fs = require("fs");
// because we moved the server part to the controller we don't need a filesystem here.

//include and execute MainController from local file
const MainController = require("./app/controllers/MainController.js"); // .js in not necessary but convenient
// also in Maincontroller we have to export the module.
// since MainController is a class, the instance has to be created:
const MainCtrl = new MainController();

// when we use require("and put a variable here without any dots, or slashes") it will try to find a variable (object) inside of it's library, that's how we import from node.
// defining the server:
// #1 version:
const server = http.createServer(function (req, res) {  // calling controller. and passing these 2 parameters.
// this is a method with a lot of arguments that can be passed in. but now we are only  passing the function request and response
// under the hood, whenever the user will make any request to the server it will go through the function that is defined here.
  MainCtrl.main(req, res);
// routing containg a string of what we are trying to connect:
// we route the direction for the url that user types on a search bar.
// therefore the controller has to be created with all the routing logic.
// #2 version or:


// first argument in the function is the actual request from the user, that takes quite a lot of information.:
// such as : method from this request, is it a post or get request, or delete, etc.
// URL which user is trying to access
// and more. and it all will be inside of the request object.

// Response on the other hand is what we will respond to the user.


// for now we are going to:
//req.url =="", it can be "/" if we are accessing mydomain.com, or it can be "/students" or "/students/1"
//req.method = "GET", "POST"
//req.body - only post POST, PUT requests
// we can actually send some information to the server in order to create something.

// node has this library, so we don't need anything external.


    });

    //#3 send html to response as a stream

    // with a use of controller instead of sending accessing and showing the content of the file here, we are calling for a controller at this point.





      //const fileStream = fs.createReadStream("./index.html"); // reads a content of index.html steams are very powerful. instead of the string it creates a stream.
      // for large contents it sends over in split parts, and at the end user it combined back again.
      // doesn't have a callback function.
      // stream can be manipulated by us
      // negative part is that if it won't be able to read the file, it willl through an exceeption and it will crash the server.
      // so for that first we have to check if we have an access to that file.
      // so we move this const fileStream inside of this check.
    // res.end(); // -> in order to close the response and mark it as finished
// very important thing for request is the request status code and request content type header.
// });
// #2 version or:

// const server = http.createServer(MainCtrl.main);
//  {  // calling controller. and passing these 2 parameters.
//   MainCtrl.main(req, res);
// });
// if we will run the node server.js now, nothing will happen, it's because we have included a library, defined it as a variable, then we call a method from http library and defining it as a variable
// and we are doing nothing after that.
// node executes all the instructions and dies, as there is no further instruction to be fulfilled.
// so in order to start the server, we have to call function, which under the hood will run an event loop.
// we are defining the port where the server will be listening for the user requests:
const port = 3000;
// ports that can be safely used: 3000 -> 5999
server.listen(port, function () { // so we are passing in the port and a callback function
// callback function will be executed when the server successfully ran.
// as an output we will use this command:
    console.log(`Server running at http://localhost:${port}`);

});
// this function listens for the requests from the user in a loop.
