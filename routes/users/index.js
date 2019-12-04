const router = require("express").Router();

router.get("/", require("./controller").getAll);
router.get("/:id", require("./controller").getOne);
router.delete("/:id", require("./controller").delOne);
router.post("/", require("./controller").getAdd);
router.post("/login", require("./controller").getlogin);
router.put("/:id", require("./controller").updateOne);

module.exports = router;
