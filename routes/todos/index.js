const router = require("express").Router();

router.get("/", require("./controller").getAll);
router.get("/email/:email", todoController.getByEmail);
router.get("/:id", require("./controller").getOne);
router.delete("/:id", require("./controller").delOne);
router.post("/", require("./controller").getAdd);
router.put("/:id", require("./controller").updateOne);

module.exports = router;
