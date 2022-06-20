require("./config/db");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("working on a business api");
});
app.use("/api", require("./router/userRouter"));
app.use("/api", require("./otherUser/userUpload"));
app.use("/api", require("./otherUser/contentUpload"));
app.use("/api", require("./otherUser/RatingController"));

app.listen(port, () => {
  console.log("server is now running...! ", port);
});
