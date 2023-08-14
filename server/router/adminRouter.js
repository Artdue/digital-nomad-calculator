const express = require('express');
const { State } = require('../db/models');
const { User } = require('../db/models');

const adminRouter = express.Router();
// в случае если будем подгружать фотку страны
// const multer = require('multer');
// const storageCountry = multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, './uploads/country');
//     },
//     filename(req, file, cb) {
//       cb(null, `${file.originalname}`);
//     },
//   });

//   const uploadsCountry = multer({ storage: storageCountry });

async function sendEmail(email, first_name, middle_name) {
  // Настройте транспорт для отправки письма
  let transporter = nodemailer.createTransport({
    // Укажите настройки для отправки почты, например, SMTP или Sendmail
    // Например, для использования Gmail как SMTP-сервера:
    service: 'outlook',
    auth: {
      user: 'checkmax95@outlook.com',
      pass: 'Dolgov95',
    },
  });
  
// Укажите данные для отправки письма
let mailOptions = {
  from:'Maxim',
  to: email,
  subject:'Hello',
  text: `${candidateName}! Как дела?`,
};

// Отправьте письмо
let info = await transporter.sendMail(mailOptions);

console.log('Email sent: ' + info.response);
}





adminRouter.get('/', async (req, res) => {
  try {
    const states = await State.findAll({ raw: true });
    res.json(states);
  } catch (error) {
    console.error('Ошибка при получении данных калькулятора:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

adminRouter.post('/', async (req, res) => {
  try {
    await State.create(req.body);
    const states = await State.findAll({ raw: true });
    res.json(states);
  } catch (error) {
    console.error('Ошибка при получении данных калькулятора:', error);
    res.status(400).json({ error: 'Ошибка при создании  калькулятора' });
  }
});

adminRouter.put('/:id', async (req, res) => {
  const stateId = req.params.id;
  try {
    await State.update(req.body, {
      where: { id: stateId },
    });
    const states = await State.findAll({ raw: true });
    res.json(states);
  } catch (error) {
    console.error('Ошибка при получении данных калькулятора:', error);
    res.status(400).json({ error: 'Ошибка при редактировании калькулятора' });
  }
});

adminRouter.delete('/:id', async (req, res) => {
  const stateId = req.params.id;
  try {
    const deletedState = await State.destroy({
      where: { id: stateId },
    });

    // if (deletedState === 0) {
    //   res.status(404).json({ error: 'Государство не найдено' });
    // } else {
    //   res.status(200).json({ message: 'Государство успешно удалено' });
    // }
    const states = await State.findAll({ raw: true });
    // console.log(states);
    res.json(states);
  } catch (error) {
    console.error('Ошибка при удалении данных государства:', error);
    res.status(500).json({ error: 'Ошибка сервера при удалении государства' });
  }
});

adminRouter.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.json(users);
  } catch (error) {
    console.error('Ошибка при получении данных пользователей:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

adminRouter.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    await User.update(req.body, {
      where: { id: userId },
    });
    const users = await User.findAll({ raw: true });
    res.json(users);
  } catch (error) {
    console.error('Ошибка при получении данных пользователей:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = adminRouter;
