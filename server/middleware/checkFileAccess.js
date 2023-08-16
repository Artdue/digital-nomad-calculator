const checkFileAccess = (req, res, next) => {
  if (req.session.admin) {
    return next(); // Разрешено доступ админам
  }
  res.status(403).send('Access denied.'); // Доступ запрещен для всех остальных
};

module.exports = checkFileAccess;
