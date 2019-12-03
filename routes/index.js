const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send({ masssage: "my name donna" });
});

module.exports = router;
