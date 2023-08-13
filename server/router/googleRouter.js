const passport = require('passport');

const googleRouter = require('express').Router();

googleRouter
  .get('/', passport.authenticate('google', { scope: ['email'] }))
  .get('/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:5173/user/login', successReturnToOrRedirect: 'http://localhost:5173/user/profile' }));
module.exports = googleRouter;
