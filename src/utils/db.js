const mongoose = require("mongoose");

const initDB = () => {
  const dbName = "ubora";
  const DB_URL = `mongodb://127.0.0.1:27017/${dbName}`;
  mongoose.connect(DB_URL);
  mongoose.connection.on("connected", () => {
    console.log(`Mongoose default connection open to ${DB_URL}`);
  });

  mongoose.connection.on("error", (err) => {
    console.log(`Mongoose default connection error: ${err}`);
  });
};

module.exports = {
  initDB,
};
