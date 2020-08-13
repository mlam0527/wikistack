const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
express.urlencoded({extended: false});
const layout = require('./views/layout');

app.get('/', (req, res) => {
  res.send(layout('hello world'));
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log('app is listening on port 3000');
});
