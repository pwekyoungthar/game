const db = require("./db");
const Admin = db.Admin;

// Admin Account Create In admins Collection
const newAdminMeth = (obj) => {
  return new Promise((resolve, reject) => {
    const newAdmin = new Admin(obj);
    newAdmin
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// All Read Data From Admin Collection
const allAdminMeth = () => {
  return Admin.find({}).exec();
};

// Find Admin Account By Id and Update Name
const updateAdminAccMeth = async (obj) => {
  try {
    const updateAdminAcc = await Admin.findByIdAndUpdate(
      obj._id,
      { name: obj.name },
      { new: true }
    ).exec();

    return updateAdminAcc;
  } catch (err) {
    throw err;
  }
};

// Delete Admin Account By Id
const adminDeleteMath = (id) => {
  return Admin.deleteOne({ _id: id }).exec();
};

module.exports = {
  newAdminMeth,
  allAdminMeth,
  updateAdminAccMeth,
  adminDeleteMath,
};
