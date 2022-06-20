const mongoose = require("mongoose");
port = 2000;
const url = "mongodb://localhost:27017/buisnessapi";

mongoose
  .connect(url)
  .then(() => {
    console.log("Database is connected successful");
  })
  .catch((error) => {
    console.log("Failed to connect");
  });
