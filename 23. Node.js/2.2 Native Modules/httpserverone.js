const http = require("http");

// thsi creates the http server
const server = http.createServer((request, response) => {
  //Request handling logic
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT + "/");
});
