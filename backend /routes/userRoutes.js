const express = require("express"),
  userControllers = require("../controllers/userControllers"),
  router = express.Router();

router.get("/", userControllers.index);
router.post("/", userControllers.createUser);

module.exports = router;
