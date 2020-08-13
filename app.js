const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const path = require('path');
const { db, Page, User } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
express.urlencoded({extended: false});

app.get('/', (req, res) => {
  res.send(layout('yesfdsfsd'));
});

const PORT = 3000;

const init = async () => {
  await Page.sync();
  await User.sync();

  app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
  });
}

init();

module.exports = app;