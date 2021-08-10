// const http = require("http");
// const fs = require("fs");
// const server = http.createServer(function (req, res){
//     // req.url =="/students", "/students/1"
//     // req.method = "GET", "POST"
//     // req.body - only post POST, PUT
//     res.writeHead(200, { 'Content-Type': 'text/plain'}); //status codes 200.. are good 400.. are bad 500.. unexpected
//     // res.write("Hello there!");
//     // #2 send html file Content
//     // fs.readFile("./index.html", function (error, data) {
//     //     if (error) {
//     //           res.writeHead(404, {
//     //               'Content-Type': 'text/plain',
//     //           });
//     //           res.end("can't read the file")
//     //     } else {
//     //       //happy path
//     //         res.wriheHead(200, {
//     //           'Content-Type': 'text/html',
//     //           'Content-Length': data.length,
//     //         });
//     //         // res.write(data);
//     //         res.end(data);
//     //     }
//     // });
//     // res.end();
//     // #3 send html to response as a stream
//     fs.access("./index.html", function (error) {
//         if (error) {
//             res.writeHead(404, {
//               "Content-Type": "text/plain",
//
//             });
//             res.end("no file found");
//         } else {
//             //happy path
//             const fileStream = fs.createReadStream( ".index.html");
//             fileStream.pipe(res);
//         }
//     });
//     const fileStream = fs.createReadStream("./index.html");
// });
// const port = 3000; // a common port for introduction
// // can be save to use any from 3000 to 5999
// server.listen(port, function () {
//     console.log('Server running at http://localhost:${port}');
// });
// include HTTP library from node
const http = require("http");
// include file system library from node
const fs = require("fs");

const server = http.createServer(function (req, res) {
  // #1 hardcoded string
  // req.url == "/", "/students", "/students/1"
  // req.method = "GET", "POST"
  // req.body - only post POST, PUT
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.write("Hello there!");
  // res.write("<html>........"); // <-- WRONG

  // #2 send html file content
  // fs.readFile("./index2.html", function (error, data) {
  //     if (error) {
  //         res.writeHead(404, {
  //             'Content-Type': 'text/plain',
  //         });
  //         res.end("can't read the file");
  //     } else {
  //         // happy path
  //         res.writeHead(200, {
  //             'Content-Type': 'text/html',
  //             'Content-Length': data.length,
  //         });
  //         // res.write(data);
  //         res.end(data);
  //     }
  // });

  // #3 send html to response as a stream, and this is the most preferable place.
  fs.access("./index.html", function (error) {
    if (error) {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.end("no file found");
    } else {
      // happy path
      const fileStream = fs.createReadStream("./index.html");
      fileStream.pipe(res);
    }
  });
});

// 3000 - 5999
const port = 3000;
server.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
