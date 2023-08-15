const express = require('express');
const { User } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const states = await User.findAll();
  res.json(states);
});

router.post('/', async (req, res) => {
  const { email } = req.body;

  const profile = await User.findOne({ where: { email } });
  res.json(profile);
});

router.put('/', async (req, res) => {
  console.log('REQ BODY', req.body);
  try {
    await User.update(
      {
        first_name: req.body.first_name,
        middle_name: req.body.second_name,
        last_name: req.body.last_name,
        birthDate: req.body.birthDate,
        phoneNumber: req.body.phone,
        citizenship: req.body.citizenship,
        income: req.body.income,
        work_exp: req.body.work_exp,
        work_date: req.body.work_date,
        visaType: req.body.visaType,
        visaShare: req.body.visaShare,
        appStatus: req.body.appStatus,
        document_status: req.body.document_status,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    const profile = await User.findOne({ where: { id: req.body.id } });
    res.json(profile);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
