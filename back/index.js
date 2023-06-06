const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

const http = require("http");
const cors = require("cors");

const server = http.createServer(app);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Alla Till Mig!");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
