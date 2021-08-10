// Controllers are classes in js.
// they are functions, but for a common pattern are used as classes.
const fs = require("fs"); // now we need filesystem module in controller.
// import path helper lkibrary from node
const path = require("path");
class MainController {
  // constructor() {}
  // we are routing to the folder with our views / html files.
  views = "../views/" // string variable that is going to be used later in the code
  // we are showing the path from the controller point of view
  // here we don't have to write functiion main ... because it will result in the syntax error
  // when we write it this way, js compiler will automatically understand that it's a function
  // so under the main we are passing request and response
  // these req, res parameters will be passed to us from our server.js const server function. where we need to call a controller
  main(req, res) {
    const url = req.url; // get URL from request URL
    // we are defining a variable as a global to make it accessible for functions.
    //let templatePath = `${this.views}index.html`;
    let templatePath = `index.html`;
    if (url === "/students") { // or we can use switch when we have more then two outcomes.
      // description of the code;:
      // IF Url maches the record, return content of students.html, if error, it writes no file found or error
      // creating variable out of views, as we are going to use it later
      // const templatePath = `${this.views}students.html`;
      const templatePath = `students.html`;
      // throw this.views it accessing the other parts that we have defined in the controller
      }
  //     else { // if the URL is not students we will return the index file.
  //     const templatePath = `${this.views}index.html`;
  // // throw this.views it accessing the other parts that we have defined in the controller
  //
  //     }
  // Using a path library that's been imported from node: __dirname - indicates the route path of node process.
      const resolvedPath = path.resolve(__dirname, this.views, templatePath);
      console.log(resolvedPath);
      fs.access(resolvedPath, function (error) { // we are using this.views as views location has already been defined

      if (error) {
        res.writeHead(404, {
          "Content-Type": "text/plain",
        });
        res.end("no file found");
      } else {
        // happy path
        const fileStream = fs.createReadStream(resolvedPath); // reads a content of index.html steams are very powerful. instead of the string it creates a stream.
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
    }
  }
// fs.access("./index.html", function (error) {
//   if (error) {
//     res.writeHead(404, {
//       "Content-Type": "text/plain",
//     });
//     res.end("no file found");
//   } else {
//     // happy path
//     const fileStream = fs.createReadStream("./index.html"); // reads a content of index.html steams are very powerful. instead of the string it creates a stream.
//     // for large contents it sends over in split parts, and at the end user it combined back again.
//     // doesn't have a callback function.
//     // stream can be manipulated by us
//     // negative part is that if it won't be able to read the file, it willl through an exceeption and it will crash the server.
//     // so for that first we have to check if we have an access to that file.
//     fileStream.pipe(res); ; // whatever is left after pipe(res) will be passed through the second pipe(), here currently we have only one pipe
//     // the fileStream is the stream that can be done through helper functions / utility functions called pipes.
//     // each pipe will receive a previous stream structure to it and pass it further down
//   }
// });

module.exports = MainController;
