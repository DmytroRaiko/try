const express = require("express");

const app = express();
const config = require("./config");
const indexRouters = require("../routers/");

app.use(express.json({
  type: ["application/json", "text/plain"]
}));
app.use(express.static("src"));

app.use("/", indexRouters);

app.listen(config.appPort, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at: http://localhost:${config.appPort}`);
});
