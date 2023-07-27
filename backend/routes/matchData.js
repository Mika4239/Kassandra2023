const express = require('express');
const router = express.Router();
const matchDataController = require('../controllers/matchDataController');

/* GET home page. */
router.get('/', async (req, res) => {
  res.json(await matchDataController.getAllData());
});

router.post('/', async (req, res) => {
  res.json(await matchDataController.addMatchData(req.body));
})

module.exports = router;
