const router = require("express").Router();
const indexControllers = require("../controllers");

router.get("/security", indexControllers.security);

module.exports = router;
