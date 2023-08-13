const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

router
  .post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, 10);
      const user = await User.findOne({ where: { email } });
      if (user) {
        res.json({ msg: 'Такой пользователь уже существует' });
      } else {
        const newUser = await User.create({ email, password: hash });
        req.session.email = newUser.email;
        req.session.admin = newUser.admin;
        req.session.save(() => {
          res.json({
            msg: 'Пользователь зарегистрирован',
            email: newUser.email,
            admin: newUser.admin,
          });
        });
      }
    } catch (error) {
      console.log('OSHIBKA REG', error);
    }
  })

  .post('/login', async (req, res) => {
    // console.log('SMOTRIM TUT REQ BODY ', req.body);
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      // console.log('SMOTRIM TUT USER ', user);
      if (user) {
        const checkPass = await bcrypt.compare(password, user.password);

        if (checkPass) {
          req.session.email = user.email;
          console.log('TTUT REEQ SESSIOOOOOOOON', req.session);
          // req.session.save(() => {
          res.json({
            msg: 'Вы успешно авторизованы!',
            email: user.email,
            admin: false,
            auth: true,
          });
          // });
        } else {
          res.json({ msg: 'Пароль неверный' });
        }
      } else {
        res.json({ msg: 'Такой пользователь не найден' });
      }
    } catch (error) {
      res.send('Что-то пошло не так', error);
    }
  })
  .get('/logout', (req, res) => {
    req.session.destroy(() => {
      res.clearCookie('name');
      res.status(200).json({ message: 'Logged out successfully' });
    });
  })

  .get('/auth', async (req, res) => {
    if (req.user) {
      res.json({
        email: req.user.email,
        admin: false, // Устанавливайте права админа в зависимости от вашей логики
        auth: true,
      });
     } else {
    res.json({
      email: req.session?.email,
      admin: req.session?.admin,
    });
  }
});

module.exports = router;
