const mongoose = require("mongoose");

const initDB = () => {
  mongoose.connect(`${process.env.DB_URL}/${process.env.dbName}`);
  mongoose.connection.on("connected", () => {
    console.log(`Mongoose default connection open to ${process.env.DB_URL}`);
  });

  mongoose.connection.on("error", (err) => {
    console.log(`Mongoose default connection error: ${err}`);
  });
};

module.exports = {
  initDB,
};
