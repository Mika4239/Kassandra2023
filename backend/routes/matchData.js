const express = require('express');
const router = express.Router();
const matchDataController = require('../controllers/matchDataController');

/* GET home page. */
router.get('/all/:team', async (req, res) => {
  res.json(await matchDataController.getAllData(req.params.team));
});

router.get('/keys', async (req, res) => {
  res.json(matchDataController.getKeys());
});

router.post('/mobility', async (req, res) => {
  res.json(await matchDataController.getMobility(req.body.team));
});

router.post('/', async (req, res) => {
  res.json(await matchDataController.addMatchData(req.body));
});

router.post('/avg', async (req, res) => {
  res.json(await matchDataController.getAverageData(req.body));
});

router.post('/count', async (req, res) => {
  res.json(await matchDataController.getCount(req.body));
});

module.exports = router;
