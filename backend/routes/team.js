const express = require('express');
const router = express.Router();

const teamController = require('../controllers/teamController');

router.get('/', async (req, res) => {
  res.json(await teamController.getAllTeams());
});

router.post('/', async (req, res) => {
    res.json(await teamController.addTeam(req.body));
});

module.exports = router;
