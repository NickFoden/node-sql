const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in middle ware");
  next();
});

app.use((req, res, next) => {
  console.log("in another middle ware");
});

const server = http.createServer(app);

server.listen(3000);
