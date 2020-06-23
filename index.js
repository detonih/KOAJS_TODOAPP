const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-body');
const mongoose = require('mongoose');

const tasks = require('./routes/tasks');

app.use(bodyParser());
app.use(tasks.routes());

mongoose.connect(
  'mongodb://localhost/koajstasks',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(5000, () => {
  console.log('running at port 5000')
});