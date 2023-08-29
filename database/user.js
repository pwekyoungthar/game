const db = require("./db");
const User = db.User;

// User Account Create In users Collection
const newUserMeth = (obj) => {
  return new Promise((resolve, reject) => {
    const newUser = new User(obj);
    newUser
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// All Read Data From Users Collection
const allUserMeth = () => {
  return User.find({}).exec();
};

// Find User Account By Id and Update Name
const updateUserAccMeth = async (obj) => {
  try {
    const updateUserAcc = await User.findByIdAndUpdate(
      obj._id,
      { name: obj.name },
      { new: true }
    ).exec();

    return updateUserAcc;
  } catch (err) {
    throw err;
  }
};

// Delete User Account By Id
const userDeleteMath = (id) => {
  return User.deleteOne({ _id: id }).exec();
};

module.exports = {
  newUserMeth,
  allUserMeth,
  updateUserAccMeth,
  userDeleteMath,
};
