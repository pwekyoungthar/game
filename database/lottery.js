const db = require("./db");
const Lottery = db.Lottery;

// Lottery Type Create In lottery Collection
const newLotteryTypeMath = (obj) => {
  return new Promise((resolve, reject) => {
    const newLotteryType = new Lottery(obj);
    newLotteryType
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// All Read Data From gameType Collection
const allLotteryTypeMeth = () => {
  return Lottery.find({}).exec();
};

// Find Game Type By Id
const findLotteryTypeById = async (id) => {
  try {
    const findLotteryType = await Lottery.findById(id).exec();
    return findLotteryType;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  newLotteryTypeMath,
  allLotteryTypeMeth,
  findLotteryTypeById,
};
