const { User, Account } = require('./data/store');
// const uuidv4 = require('uuid/v4');
const Mutation = {
  createUser: async (_, { email, first_name, last_name }) => {
    return User.create({
      email,
      first_name,
      last_name,
    }).then(user => {
      return user;
    });
  },

  createAccount: async (_, { model, playlist, weights }) => {
    try {
      const result = await Account.create({
        model,
        playlist,
        weights,
      });

      return { ...result };
    } catch (error) {
      console.log('error', error);
    }
  },

  updateAccount: async (_, { id, model, playlist, weights }) => {
    try {
      const result = await Account.update({
        id,
        model,
        playlist,
        weights,
      });
      return { ...result };
    } catch (error) {
      console.log('error');
    }
  },
  deleteAccount: async (_, { id }) => {
    try {
      const result = await Account.delete({ id });
      return { ...result };
    } catch (error) {
      console.log('error');
    }
  },
};

module.exports = { Mutation };
