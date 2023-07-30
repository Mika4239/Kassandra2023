const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', async (req, res) => {
  res.json(await userController.getAllUsers());
});

router.get('/user/:username', async (req, res) => {
  res.json(await userController.getUser(req.params.username));
});

router.post('/check', async (req, res) => {
  res.json(await userController.checkUser(req.body.username, req.body.password));
});

router.post('/', async (req, res) => {
  res.json(await userController.addUser(req.body));
});

module.exports = router;
