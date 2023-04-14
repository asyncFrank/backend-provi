const { addStartupCategory } = require("../controllers/CategoryController");
const { getStartupByCategory } = require("../controllers/CategoryController");
const { getCategories } = require("../controllers/CategoryController");

const router = require("express").Router();

router.post("/add", addStartupCategory);
router.get("/category", getStartupByCategory);
router.get("/listAll", getCategories);

module.exports = router;
