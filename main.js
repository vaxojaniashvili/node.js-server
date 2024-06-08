import http from "http";
import url from "url";
import querystring from "querystring";
import fetch from "node-fetch";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/api/signup" && req.method === "POST") {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
          if (err) throw err;
        });
      });
    res.end();
  } else if (req.url === "/api/users" && req.method === "GET") {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.setHeader = res.end(data);
    });
  }
});

const port = 3001;

server.listen(port, () => {
  console.log(`server is running on localhost ${port}`);
});
