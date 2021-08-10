// creating a simple http serverCookie
// importing the HTTP library from node
// the same as we did with the external file:
const http = require("http");
// when we use require("and put a variable here without any dots, or slashes") it will try to find a variable (object) inside of it's library, that's how we import from node.
// defining the server:
const server = http.createServer(function (req, res) {
// this is a method with a lot of arguments that can be passed in. but now we are only  passing the function request and response
// under the hood, whenever the user will make any request to the server it will go through the function that is defined here.

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
const fs = require("fs");

// #1 hardcoded way:
// as a first try we are going to return a simple str line to any request from the user.
    // res.writeHead(200, {'Content-Type': 'text/plain' }); //request status code (for a good result is always 200, 400 are errors, 500 are unexpected errors) and request content type header.
    // res.write("Hello There!"); // -> Response
    // no matter what type of URL will be typed in a search box, it will be rerouting to the

    // #2 send html file content
    // instead of writing a line here we can include all the content from index.html file.
    // for that we need to read the file using node, which is why we need to include a file system from node. look up for details on how to import.
    // second parameter is the callback function, that accepts parameters error and data
    // error contains only something if the function fails to read the file


    // fs.readFile("./index.html", function (error, data) {
    //   if (error) {  // first variable
    //     //404 not found error
    //     res.writeHead(404, {  // second variable, Data in this case. res stays for response.
    //       'Content-Type': 'text/plain',
    //     });
    //     res.end("can't read the file") // to check if it works we can change the function
    //   } else {
    //     // happy path
    //     res.writeHead(200, {  // second variable, Data in this case. res stays for response.
    //       'Content-Type': 'text/html',
    //       // the second header we need to set is a content length. it tells to request how long it should take ot response
    //
    //       'Content-Length': data.length, // in order to get the length we have to pass the variable (data in this case)and then write length.
    //       // so what this whole function does:
    //       // reads file from the index.html, calls callback function, ignores error for now
    //       // data will contain all the contents of the html as a string (text/html)
    //     });
    //     // res.write(data);
    //     // there also is a write sense a buffer of data, though this request stream
    //     // when we are done with it we call this end:
    //     // res.end();
    //     // other way of doing the same :
    //     res.end(data);
    //   }
    //
    // });

    //#3 send html to response as a stream
      fs.access("./index.html", function (error) {
        if (error) {
          res.writeHead(404, {
            "Content-Type": "text/plain",
          });
          res.end("no file found");
        } else {
          // happy path
          const fileStream = fs.createReadStream("./index.html"); // reads a content of index.html steams are very powerful. instead of the string it creates a stream.
          // for large contents it sends over in split parts, and at the end user it combined back again.
          // doesn't have a callback function.
          // stream can be manipulated by us
          // negative part is that if it won't be able to read the file, it willl through an exceeption and it will crash the server.
          // so for that first we have to check if we have an access to that file.
          fileStream.pipe(res); ; // whatever is left after pipe(res) will be passed through the second pipe(), here currently we have only one pipe
          // the fileStream is the stream that can be done through helper functions / utility functions called pipes.
          // each pipe will receive a previous stream structure to it and pass it further down
        }
      });
      //const fileStream = fs.createReadStream("./index.html"); // reads a content of index.html steams are very powerful. instead of the string it creates a stream.
      // for large contents it sends over in split parts, and at the end user it combined back again.
      // doesn't have a callback function.
      // stream can be manipulated by us
      // negative part is that if it won't be able to read the file, it willl through an exceeption and it will crash the server.
      // so for that first we have to check if we have an access to that file.
      // so we move this const fileStream inside of this check.
    // res.end(); // -> in order to close the response and mark it as finished
// very important thing for request is the request status code and request content type header.
});

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
