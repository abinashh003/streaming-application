const router = require("express").Router();
const {
  createStream,
  getStream
} = require("../controllers/streamController");

router.post("/", createStream);
router.get("/:id", getStream);

module.exports = router;