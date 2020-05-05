const router = require("express").Router();
const handlers = require("../handlers");
const auth = require("../middlewares/auth");

router.get("/", handlers.showPolls);
router.post("/", auth, handlers.createPoll);

router.get("/user", auth, handlers.userPolls);

router.get("/:id", handlers.getPoll);
router.post("/:id", auth, handlers.vote);
router.delete("/:id", auth, handlers.deletePoll);

module.exports = router;
