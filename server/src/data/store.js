const Sequelize = require("sequelize");

const db = new Sequelize("dear", null, null, {
  dialect: "sqlite",
  storage: "./src/data/dear.sqlite"
});

const UserModel = db.define("user", {
  username: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
  createdAt: { type: Sequelize.STRING },
  updatedAt: { type: Sequelize.STRING }
});

const AccountModel = db.define("account", {
  model: { type: Sequelize.STRING },
  playlist: { type: Sequelize.STRING },
  model: { type: Sequelize.STRING },
  field5: { type: Sequelize.NUMBER },
  field6: { type: Sequelize.NUMBER }
  // weights: { type: Sequelize.BLOB }
});

UserModel.hasMany(AccountModel);
AccountModel.belongsTo(UserModel);

const User = db.models.user;
const Account = db.models.account;

module.exports = { User, Account };
