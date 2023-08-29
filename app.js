const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

// User Require
const userRole = require("./database/userRole");
const adminColl = require("./database/admin");
const userColl = require("./database/user");

// Game require
const gameType = require("./database/gameType");
const gameTypeProvider = require("./database/gameTypeProvider");
const LotteryType = require("./database/lottery");
const LotteryProduct = require("./database/lotteryProduct");

for (let i = 0; i < 1000; i++) {
  //   let lotteryNum = i.toString().padStart(2, "0");
  let lotteryNum = i.toString().padStart(3, "0");

  //Lottery Number 2D Object
  const lotteryNumObj = {
    lotteryTypeId: "64ee375dd60e3ada1d80bbc6",
    lotteryProductName: lotteryNum,
    limitAmount: 20000,
    status: true,
  };

  LotteryProduct.newLotteryNumMath(lotteryNumObj)
    .then((data) => {
      console.log("Lottery Number saved:", data);
    })
    .catch((err) => {
      console.error("Error saving Lottery Number:", err);
    });
}

app.listen(process.env.PORT);
