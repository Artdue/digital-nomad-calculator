const passport = require('passport');
const { User } = require('./db/models');
const cors = require('cors');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACKURL,
  },
  (accessToken, refreshToken, profile, done) => {
    done(null, profile);
  },
));
passport.serializeUser(async (user, done) => {
  console.log('=============>');
  const email = user.emails.map((el) => el.value).join('');
  try {
    const foundUser = await User.findOne({ where: { email }, raw: true });
    if (foundUser) {
      const {
        email,
      } = foundUser;
      done(null, {
        email,
      });
    } else {
      const newUserData = await User.create({ email });
      const newUser = newUserData.get({ plain: true });
      done(null, { email: newUser.email });
    }
  } catch (err) {
    console.log('Ошибка', err);
  }
});
passport.deserializeUser((user, done) => {
  console.log('=============>deserial');
  done(null, user);
});

// passport.use(cors({
//   origin: 'http://localhost:5173', // Замените на адрес вашего фронтенда
//   credentials: true, // Разрешает отправку куков и заголовков аутентификации
// }));
