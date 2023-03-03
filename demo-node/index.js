const app = require("express");
const server = app();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");

server.use(app.json());
server.use(app.urlencoded({ extended: true }));
server.use(
  cors({
    origin: "*",
  })
);

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/user", (req, res) => {
  res.json({
    name: "John Doe",
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
