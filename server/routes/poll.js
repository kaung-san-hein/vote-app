const router = require("express").Router();
const handlers = require("../handlers");
const auth = require("../middlewares/auth");

router.get("/", handlers.showPolls);
router.post("/", auth, handlers.createPoll);

module.exports = router;
