require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const emailSender=require('./src/helpers/emailSender.helper');

const app = express();

//routes
const articlesRouter = require("./src/routes/articles.routes");

//app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// emailSender({email:'sds@asdd.com',name:'dsdf'})
// process.env.ATLAS_URI;//||'mongodb+srv://Abdullah:Test-123@cluster0.xh7gosd.mongodb.net/Eagle-Elite';
const Uri = process.env.ATLAS_URI; //"mongodb://localhost:27017/userDb";
mongoose.connect(Uri, { useNewUrlParser: true });

//for the routes users
app.use("/articles", articlesRouter);

let tokenA = require("jsonwebtoken");

app.use(express.json());

app.post("/loginUser", async function (req, res) {
  let token = tokenA.sign({ userKiId: req.body }, "apple sweet", {
    expiresIn: "2d",
  });

  res.json({
    token,
  });
});

app.post("/googleLogin", async function (req, res) {
  let token = tokenA.sign({ userKiId: req.body }, "apple sweet", {
    expiresIn: "2d",
  });

  res.json({
    token,
  });
});

app.use(function (err, req, res, cb) {
  switch (err.code) {
    case 100:
      res.json({
        message: "USER ALERADY EXIST",
        code: 300,
        helpingCode: 299,
      });
      break;
  }
});

app.listen(process.env.PORT || 5000);
