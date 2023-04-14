// const http = require('http');

// const todos = [
//   { id: 1, name: "Mahesh" },
//   { id: 2, name: "Rajesh" }
// ];

// const server = http.createServer((req, res) => {
//   // res.write("Hello");
//   const { headers, method } = req;
//   console.log(headers, method);
//   res.end(JSON.stringify({
//     success: true,
//     data: todos
//   }));
// });

// const PORT = 5000;

// server.listen(PORT, () => console.log(`Server Running on port ${6000}`));

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is a Home page");
  }
  else if (req.url === "/about") {
    res.end("This is a about page");
  }
  else {
    res.end(`
  <h1>Oops!</h1>
  <p>The page you are looking for is not available</p>
  <a href="/">back to home</a>
  `);
  }
});

const PORT = 5000;
server.listen(5000);