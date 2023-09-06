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

profileRouter.post(
  '/:id/passport',
  uploadsPassport.single('file'),
  async (req, res) => {
    const { id } = req.params;
    const originalname = req.file.filename;
    try {
      await User.update(
        { passport: `/uploads/passport/${originalname}` },
        { where: { id } }
      );
      res.send({ msg: 'Паспорт успешно загружен' });
    } catch (error) {
      console.log('error', error);
    }
  }
);
profileRouter.post(
  '/:id/balance',
  uploadsBalance.single('file'),
  async (req, res) => {
    const { id } = req.params;
    const originalname = req.file.filename;
    try {
      await User.update(
        { balance: `/uploads/balance/${originalname}` },
        { where: { id } }
      );
      res.send({ msg: 'Банковская выписка успешно загружена' });
    } catch (error) {
      console.log('error', error);
    }
  }
);

profileRouter.post(
  '/:id/lease',
  uploadsLease.single('file'),
  async (req, res) => {
    const { id } = req.params;
    const originalname = req.file.filename;
    try {
      await User.update(
        { lease: `/uploads/lease/${originalname}` },
        { where: { id } }
      );
      res.send({ msg: 'Справка о работе успешно загружена' });
    } catch (error) {
      console.log('error', error);
    }
  }
);

module.exports = profileRouter;
