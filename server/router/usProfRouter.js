const express = require('express');
const { User } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const states = await User.findAll();
  res.json(states);
});

router.post('/', async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  const profile = await User.findOne({ where: { email } });
  res.json(profile);
});

router.put('/', async (req, res) => {
  console.log(req.body);
  const user = await User.update(
    {
      first_name: req.body.first_name,
      middle_name: req.body.second_name,
      last_name: req.body.lest_name,
      citizenship: req.body.citizenship,
      income: req.body.income,
      work_exp: req.body.work_exp,
      work_date: req.body.work_date,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  const profile = await User.findOne({ where: { id: req.body.id } });
  res.json(profile);
});
module.exports = router;
