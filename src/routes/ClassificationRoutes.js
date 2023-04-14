const {
  addStartupClassification,
  getClassifications,
} = require("../controllers/ClassificationController");

const router = require("express").Router();

router.post("/add", addStartupClassification);
router.get("/listAll", getClassifications);

module.exports = router;
