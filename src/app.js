const express = require("express");
const cors = require("cors");

const { csRouter } = require("./routes");
const { initDB } = require("./utils/db");

const app = express();

require("dotenv").config();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use("/cs", csRouter);

initDB();
app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.SERVER_PORT}`
  );
});
