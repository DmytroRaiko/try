const {getMessage} = require("../src/db.services");

module.exports = {
  security: async (req, res, next) => {
    const msgs = await getMessage();
    res.send(msgs);
  }
};
