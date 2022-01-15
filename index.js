const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const socketIO = require("socket.io");
const io = socketIO((server, { cors: { origin: "*" } }));

io.on("connection", (socket) => {
  console.log("new user connected");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Server running on port " + PORT));
