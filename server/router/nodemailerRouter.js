const express = require("express");

const nodemailerRouter = express.Router();
const nodemailer = require("nodemailer");

const { User } = require("../db/models");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  // service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

nodemailerRouter.post("/", async (req, res) => {
  // console.log(11111111);
  // console.log('ETO REQ BODY==============>', req.body);
  const { phone, name, email, message } = req.body;
  const mailData = {
    from: "visaproject123@gmail.com",
    to: "visaproject123@gmail.com",
    subject: "Запрос консультации от незарегистрированного пользователя",
    text: " ",

    html: ` <b> Посетитель сайта ${name} запросил консультацию. </b> 
    <br>Номер телефона: <b>${phone}</b> <br>Почта: <b>${email}</b> <br> ${message}`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log("==========", error);
    }
    res.sendStatus(200);
  });
});

nodemailerRouter.post("/user", async (req, res) => {
  const mailData = {
    from: "visaproject123@gmail.com",
    to: "visaproject123@gmail.com",
    subject: "Запрос консультации",
    text: " ",

    html: ` <b> Пользователь ${req.body.first_name} ${req.body.middle_name} ${req.body.last_name} запросил консультацию. </b><br>Номер телефона: <b>${req.body.phoneNumber}</b> <br> Почта: <b> ${req.body.email}</b>`,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log("==========", error);
    }
    res.sendStatus(200);
  });
});

nodemailerRouter.post("/admin", async (req, res) => {
  const { first_name, middle_name, last_name, email, document_status } =
    req.body;
  const mailData = {
    from: "visaproject123@gmail.com",
    to: email,
    subject: "Статус документов",
    text: " ",

    html: `<b> Уважаемый(ая) ${first_name} ${middle_name}. </b> <br> Статус ваших документов изменился:<b> ${document_status}</b>. <br>Наш юрист с Вами свяжется в самое ближайшее время для уточнения удобной даты и времени консультации. <br>Хорошего дня!`,
  };
  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log("==========", error);
    }
    res.sendStatus(200);
  });
});

module.exports = nodemailerRouter;
