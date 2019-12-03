const mongoose = require("mongoose");
const { DATABASE_HOST, DATABASE_NAME } = require("./environtment");

mongoose
  .connect(`${DATABASE_HOST}/${DATABASE_NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Conneted to database");
  })
  .catch(error => {
    console.log("Theer is something wrong", error);
  });

const db = mongoose.connection;

module.exports = db;
