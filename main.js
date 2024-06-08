import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        res.end(JSON.stringify(data, null, 2));
      });
  }
});

const port = 3001;

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
