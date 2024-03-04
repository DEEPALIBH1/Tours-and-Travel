//4) START
const mongoose = require('mongoose');
const dotnev = require('dotenv');
const app = require('./app');

dotnev.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('PASSWORD', process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

console.log(process.env);
const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}....`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
//test
