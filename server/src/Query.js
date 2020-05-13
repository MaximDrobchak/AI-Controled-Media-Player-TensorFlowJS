const { User, Account } = require("./data/store");

const Query = {
  users: () => User.findAll(),
  user: (_, { id }, { user }) => User.findById(id),
  accounts: () => Account.findAll(),
  account: (_, { id }, { acounts }) => Account.findById(id)
};

module.exports = { Query };
