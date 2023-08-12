const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

router
  .post('/', async (req, res) => {
    //  console.log('SMOTRIM TUT REQ BODY ', req.body);
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      console.log('SMOTRIM TUT USER ', user);
      if (user && user.admin === true) {
        const checkPass = await bcrypt.compare(password, user.password);

        if (checkPass) {
          req.session.email = user.email;
          req.session.admin = user.admin;
          // console.log('TTUT REEQ SESSIOOOOOOOON', req.session);
          req.session.save(() => {
            res.json({
              msg: 'Вы успешно авторизованы!',
              email: user.email,
              admin: true,
              auth: true,
            });
          });
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
    res.json({
      email: req.session?.email,
      admin: req.session?.admin,
    });
  });
module.exports = router;
