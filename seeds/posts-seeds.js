const { Post } = require('../models');

const postData = [
  {
    title: 'Technology',
    content: 'Using all of the new technologies available has been awesome!',
    post_id: 1
  },
  {
    title: 'Past',
    content: 'In the past, it must have been so different without modern technologies!',
    post_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
