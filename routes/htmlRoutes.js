const path = require('path');

module.exports = function (app) {
  //GET notes.html
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
  });

  //GET index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });
};
