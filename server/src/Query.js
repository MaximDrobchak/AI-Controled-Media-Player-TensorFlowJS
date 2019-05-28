const { User, Account } = require('./data/store');

const Query = {
  users: () => User.findAll(),
  accounts: () => Account.findAll(),
  account: (_, { id }, { acounts }) => Account.findById(id),
};

module.exports = { Query };
