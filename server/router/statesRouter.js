const express = require('express');
const { State } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const states = await State.findAll();
  res.json(states);
});

module.exports = router;
