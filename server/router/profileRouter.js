const express = require('express');
const multer = require('multer');
const { User } = require('../db/models');

const profileRouter = express.Router();

const storagePassport = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads/passport');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const storageBalance = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads/balance');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const storageLease = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads/lease');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const uploadsPassport = multer({ storage: storagePassport });
const uploadsBalance = multer({ storage: storageBalance });
const uploadsLease = multer({ storage: storageLease });

// profileRouter.post('/passport', uploadsPassport.single('file'), async (req, res) => {
//   const { userId } = req.session;
//   const originalname = req.file.filename;

//   await User.update({ passport: `/uploads/passport/${originalname}` }, { where: { id: userId } });
//   res.send('Паспорт успешно загружен.');
// });

// profileRouter.post('/balance', uploadsBalance.single('file'), async (req, res) => {
//   const { userId } = req.session;
//   const originalname = req.file.filename;

//   await User.update({ balance: `/uploads/balance/${originalname}` }, { where: { id: userId } });
//   res.send('Банковская выписка успешно загружена.');
// });

// profileRouter.post('/lease', uploadsLease.single('file'), async (req, res) => {
//   const { userId } = req.session;
//   const originalname = req.file.filename;

//   await User.update({ lease: `/uploads/lease/${originalname}` }, { where: { id: userId } });
//   res.send('Справка о работе успешно загружена.');
// });

// profileRouter.post('/passport', uploadsPassport.single('file'), async (req, res) => {
//   const userId = 1; // Замените на нужный сид пользователя
//   const originalname = req.file.filename;

//   await User.update({ passport: `/uploads/passport/${originalname}` }, { where: { id: userId } });
//   res.send('Паспорт успешно загружен.');
// });
profileRouter.post('/passport', uploadsPassport.single('file'), async (req, res) => {
  const userId = 1; 
  const originalname = req.file.filename;
  
    await User.update({ passport: `/uploads/passport/${originalname}` }, { where: { id: userId } });
    res.send('Паспорт успешно загружен.');
  });
profileRouter.post('/balance', uploadsBalance.single('file'), async (req, res) => {
  const userId = 1;
  const originalname = req.file.filename;

  await User.update({ balance: `/uploads/balance/${originalname}` }, { where: { id: userId } });
  res.send('Банковская выписка успешно загружена.');
});

profileRouter.post('/lease', uploadsLease.single('file'), async (req, res) => {
  const userId = 1; 
  const originalname = req.file.filename;

  await User.update({ lease: `/uploads/lease/${originalname}` }, { where: { id: userId } });
  res.send('Справка о работе успешно загружена.');
});

module.exports = profileRouter;
