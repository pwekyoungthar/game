const db = require("./db");
const LotteryProduct = db.LotteryProduct;

// Lottery Product Create In lottery product Collection
const newLotteryNumMath = (obj) => {
  return new Promise((resolve, reject) => {
    const newLotteryNum = new LotteryProduct(obj);
    newLotteryNum
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
const allLotteryNumMeth = () => {
  return LotteryProduct.find({}).exec();
};

// Find Game Type By Id
const findLotteryNumById = async (id) => {
  try {
    const findLotteryNumById = await LotteryProduct.findById(id).exec();
    return findLotteryNumById;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  newLotteryNumMath,
  allLotteryNumMeth,
  findLotteryNumById,
};
