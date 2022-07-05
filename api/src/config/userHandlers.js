const users = {
  1: { username: "Alice", online: false },
  2: { username: "Bob", online: false }
};

module.exports = (io, socket) => {
  const getUsers = () => {
    io.in(socket.roomId).emit("users", users);
  };

  const addUser = ({ username, userId }) => {
    if (!users[userId]) {
      users[userId] = { username, online: true };
    } else {
      if (users[userId]?.online)
        users[userId]= true;
    }
    getUsers();
  };

  const removeUser = (userId) => {
    console.log(userId);
    if (users[userId]?.online)
      users[userId].online = false;
    getUsers();
  };

  socket.on("user:get", getUsers);
  socket.on("user:add", addUser);
  socket.on("user:leave", removeUser);
};
