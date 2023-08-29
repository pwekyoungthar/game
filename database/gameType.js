const db = require("./db");
const GameType = db.GameType;

// Game Type Create In gameType Collection
const newGameTypeMath = (obj) => {
  return new Promise((resolve, reject) => {
    const newGameType = new GameType(obj);
    newGameType
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
const allGameTypeMeth = () => {
  return GameType.find({}).exec();
};

// Find Game Type By Id
const findGameTypeById = async (id) => {
  try {
    const findGameType = await GameType.findById(id).exec();
    return findGameType;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  newGameTypeMath,
  allGameTypeMeth,
  findGameTypeById,
};
