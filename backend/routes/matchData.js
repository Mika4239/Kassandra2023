const express = require('express');
const router = express.Router();
const matchDataController = require('../controllers/matchDataController');

/* GET home page. */
router.get('/', async (req, res) => {
  res.json(await matchDataController.getAllData());
});

router.get('/keys', async (req, res) => {
  res.json(matchDataController.getKeys());
});

router.post('/', async (req, res) => {
  res.json(await matchDataController.addMatchData(req.body));
});

router.post('/avg', async (req, res) => {
  res.json(await matchDataController.getAverageData(req.body.path));
});

router.post('/count', async (req, res) => {
  res.json(await matchDataController.getCount(req.body));
});

module.exports = router;
