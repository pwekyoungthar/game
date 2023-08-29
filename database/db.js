const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/gameDB";

const Schema = mongoose.Schema;

const UserRoleSchema = new Schema({
  roleName: { type: String, require: true },
});

const AdminSchema = new Schema({
  userRole: String,
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  percentage: { type: Number, require: true },
  unit: Number,
  promotionUnit: Number,
  image: String,
  status: { type: Boolean, require: true },
  since: { type: Date, require: true },
});

const UserSchema = new Schema({
  userRole: { type: String, require: true },
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  percentage: { type: Number, require: true },
  unit: Number,
  promotionUnit: Number,
  image: String,
  since: { type: Date, require: true },
  status: { type: Boolean, require: true },
});

const GameTypeSchema = new Schema({
  name: { type: String, require: true },
  status: { type: Boolean, require: true },
});

const GameTypeProviderSchema = new Schema({
  gameTypeId: { type: String, require: true },
  name: { type: String, require: true },
  status: { type: Boolean, require: true },
});

const LotterySchema = new Schema({
  gameTypeProviderId: { type: String, require: true },
  name: { type: String, require: true },
  limitAmount: { type: Number, require: true },
  startTime: { type: Date, require: true },
  endTime: { type: Date, require: true },
  status: { type: Boolean, require: true },
  multiplyX: { type: Number, require: true },
  roundValue: { type: Number, require: true },
});

const LotteryProductSchema = new Schema({
  lotteryTypeId: { type: String, require: true },
  lotteryProductName: { type: String, require: true },
  limitAmount: { type: Number, require: true },
  status: { type: Boolean, require: true },
});

const UserRole = mongoose.model("userRole", UserRoleSchema);
const Admin = mongoose.model("admin", AdminSchema);
const User = mongoose.model("user", UserSchema);

const GameType = mongoose.model("gameType", GameTypeSchema);
const GameTypeProvider = mongoose.model(
  "gameTypeProvider",
  GameTypeProviderSchema
);
const Lottery = mongoose.model("lottery", LotterySchema);
const LotteryProduct = mongoose.model("lotteryProduct", LotteryProductSchema);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = {
  UserRole,
  Admin,
  User,
  GameType,
  GameTypeProvider,
  Lottery,
  LotteryProduct,
};
