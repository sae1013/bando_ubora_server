const express = require("express");
const cors = require("cors");

const { csRouter } = require("./routes");
const { initDB } = require("./utils/db");

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "localhost",
  })
);
app.use("/cs", csRouter);

initDB();
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
