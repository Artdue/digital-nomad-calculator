const express = require('express');

const nodemailerRouter = express.Router();
const nodemailer = require('nodemailer');

// const { User } = require('../db/models');

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  // service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

nodemailerRouter.post('/', async (req, res) => {
  const {
    name, phone, email, message,
  } = req.body;
  const mailData = {
    from: 'visaproject123@gmail.com',
    to: email,
    subject: 'Запрос консультации',
    text: ' ',

    html: ` <b> Посетитель сайта ${name} запросил консультацию. </b><br> Для уточнения данных пользователь оставил номер телефона: ${phone} и почту${email}<br/> {message}`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log('==========', error);
    }
    res.status(200);
  });
});

module.exports = nodemailerRouter;
