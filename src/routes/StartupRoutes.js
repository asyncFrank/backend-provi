const {
  fetchStartupByClassification,
  fetchAllStartups,
  fetchStartupByCategory,
  fetchStartupBySegment,
  countCollection,
  fetchStartupById,
} = require("../controllers/StartupController");

const router = require("express").Router();
//startup por id
router.get("/startup/:id",fetchStartupById)
//pega com classification_id como critério
router.get("/with_classification", fetchStartupByClassification);

//pega todas absolutamente todas
router.get ("/all",fetchAllStartups)

// // busca startups por categoria (antes/dentro/depois)
router.get("/category",fetchStartupByCategory);

router.get("/segment",fetchStartupBySegment);

router.get("/count", countCollection);
module.exports = router;
