const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("бэк работает");
});

module.exports = router;
