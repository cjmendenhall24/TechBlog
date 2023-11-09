const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    password: 'password123',
    user_id: 1
  },
  {
    username: 'user2',
    password: 'password456',
    user_id: 2
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
