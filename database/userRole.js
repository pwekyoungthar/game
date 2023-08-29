const db = require("./db");
const UserRole = db.UserRole;

// User Role Create In userRole Collection
const newUserRoleMeth = (obj) => {
  return new Promise((resolve, reject) => {
    const newUserRole = new UserRole(obj);
    newUserRole
      .save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// All Read Data From UserRole Collection
const allUserRoleMeth = () => {
  return UserRole.find({}).exec();
};

// Find UserRole By Id and Update Name
const updateUserRoleMeth = async (obj) => {
  try {
    const updatedCategory = await UserRole.findByIdAndUpdate(
      obj._id,
      { roleName: obj.roleName },
      { new: true }
    ).exec();

    return updatedCategory;
  } catch (err) {
    throw err;
  }
};

// Delete UserRole By Id
const userRoleDeleteMath = (id) => {
  return UserRole.deleteOne({ _id: id }).exec();
};

module.exports = {
  newUserRoleMeth,
  allUserRoleMeth,
  updateUserRoleMeth,
  userRoleDeleteMath,
};
