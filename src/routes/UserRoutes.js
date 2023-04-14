const { addToLikedStartups } = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedStartups);

module.exports = router;
