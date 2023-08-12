require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const userRouter = require('./router/userRouter');
const profileRouter = require('./router/profileRouter');
const adminRouter = require('./router/adminRouter');
const statesRouter = require('./router/statesRouter');
const usProfRouter = require('./router/usProfRouter');

const sessionConfig = {
  name: 'name',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999999,
    httpOnly: true,
  },
};

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session(sessionConfig));
app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads/passport', express.static('passport'));
app.use('/uploads/balance', express.static(' balance'));
app.use('/uploads/lease', express.static('lease'));

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/admin', adminRouter);
app.use('/states', statesRouter);
app.use('/changeProfile', usProfRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
