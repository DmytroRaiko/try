const express = require("express");

const app = express();
const config = require("./config");
const indexRouters = require("../routers/");
const socket = require("socket.io");
const cors = require("cors");

// const io = new Server(server);

app.use(express.json({
  type: ["application/json", "text/plain"]
}));
app.use(express.static("src"));

app.use("/", indexRouters);

const server = app.listen(config.appPort, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at: http://localhost:${config.appPort}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

const registerMessageHandlers = require("./config/messageHandlers");
const registerUserHandlers = require("./config/userHandlers");

io.on("connection",(socket)=>{
  // выводим сообщение о подключении пользователя
  console.log("User connected");

  const { roomId } = socket.handshake.query;
  socket.roomId = roomId;

  socket.join(roomId);

  registerMessageHandlers(io, socket);
  registerUserHandlers(io, socket);

  socket.on("disconnect", () => {
    console.log("User disconnected");
    socket.leave(roomId);
  });
});
