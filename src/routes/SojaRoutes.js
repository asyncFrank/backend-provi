const {  addPeriod, fetchPeriodByUf} = require("../controllers/SojaController");

const router = require("express").Router();

router.post("/add", addPeriod);

router.get("/uf", fetchPeriodByUf);

module.exports = router;
