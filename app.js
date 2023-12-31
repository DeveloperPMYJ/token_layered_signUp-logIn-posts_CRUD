const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config();

const { router } = require("./src/routes");

const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(router);

app.get("/", async (req, res) => {
  try {
    return res.status(200).json({ message: "Welcome to Team6's server!" });
  } catch (err) {
    console.log(err);
  }
});


// 서버 구동
const server = http.createServer(app);
const portNumber = process.env.PORT || 8000;

const start = async () => {
  try {
    server.listen(portNumber);
    console.log(`Server is listening on ${portNumber}`);
  } catch (err) {
    console.error(err);
  }
};

start();
