const Sequelize = require('sequelize');

const db = new Sequelize('dear', null, null, {
  dialect: 'sqlite',
  storage: './src/data/dear.sqlite',
});

const UserModel = db.define('user', {
  username: { type: Sequelize.STRING },
  pasword: { type: Sequelize.STRING },
});

const AccountModel = db.define('account', {
  model: { type: Sequelize.STRING },
  playlist: { type: Sequelize.STRING },
  weights: { type: Sequelize.BLOB },
});

UserModel.hasMany(AccountModel);
AccountModel.belongsTo(UserModel);

const User = db.models.user;
const Account = db.models.account;

module.exports = { User, Account };
