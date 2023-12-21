const mongoose = require("mongoose");

const initDB = async () => {
  try {
    const { connections } = await mongoose.connect(`${process.env.DB_URL}`, {
      writeConcern: { w: "majority" },
    });
    if (connections[0].readyState === 1) {
      console.log("연결성공");
    } else {
      console.log("연결실패");
    }
  } catch (err) {
    console.log("연결실패");
    console.log(err);
  }
};

module.exports = {
  initDB,
};
