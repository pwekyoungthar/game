const db = require("./db");
const GameTypeProvider = db.GameTypeProvider;

// Game Type Provider Create In gameType Collection
const newGameTypeProviderMath = (obj) => {
  return new Promise((resolve, reject) => {
    const newGameTypeProvider = new GameTypeProvider(obj);
    newGameTypeProvider
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// All Read Data From gameTypeProvider Collection
const allGameTypeProviderMeth = () => {
  return GameTypeProvider.find({}).exec();
};

// Find Game Type Provider By Id
const findGameTypeProviderById = async (id) => {
  try {
    const findGameTypeProvider = await GameTypeProvider.findById(id).exec();
    return findGameTypeProvider;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  newGameTypeProviderMath,
  allGameTypeProviderMeth,
  findGameTypeProviderById,
};
