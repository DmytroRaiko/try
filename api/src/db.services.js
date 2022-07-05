const db = require("./db");

module.exports = {
  getMessage: async () =>
    db.select().from("message"),

  addMessage: async (data) =>
    db("message").insert(data),

  deleteMessage: async (id) => db("message").where("messageId", id).delete(),
};
