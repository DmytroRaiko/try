const messageServices = require("../db.services");

module.exports = (io, socket) => {
  const getMessages = async () => {
    console.log("here");
    const messages = await messageServices.getMessage();

    io.in(socket.roomId).emit("messages", messages);
  };

  console.log(io);

  const addMessage = async (message) => {
    console.log(message);
    await messageServices.addMessage(message);

    const messages = await messageServices.getMessage();
    io.in(socket.roomId).emit("messages", messages);
  };

  const removeMessage = async (messageId) => {
    await messageServices.deleteMessage(messageId);

    console.log(messageId);
    const messages = await messageServices.getMessage();
    io.in(socket.roomId).emit("messages", messages);
  };

  socket.on("message:get", getMessages);
  socket.on("message:add", addMessage);
  socket.on("message:remove", removeMessage);
};
