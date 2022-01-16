const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");


const adminRouter = require("./routers/admin");
const headRouter = require("./routers/head");
const teacherRouter = require("./routers/teacher");

app.use(express.json());
app.use(cors());

const dburl =
  "mongodb+srv://test:test@cluster0.rmspt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(dburl)
  .then(() => {
    console.log("db connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/admin", adminRouter);

app.use("/head", headRouter);

app.use("/teacher", teacherRouter);

app.use("/", (req, res, next) => {
  res.status(404).send("404")
  console.log("/");
});
