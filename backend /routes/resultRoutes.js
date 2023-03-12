const express = require("express"),
  resultControllers = require("../controllers/resultControllers"),
  router = express.Router();

router.get("/", resultControllers.index);
router.post("/", resultControllers.createResult);

module.exports = router;
