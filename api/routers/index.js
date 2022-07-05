const router = require("express").Router();
const indexControllers = require("../controllers");

router.get("/", indexControllers.security);

module.exports = router;
