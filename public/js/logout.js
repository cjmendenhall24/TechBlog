const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.post('/logout', async (req, res) => {
  try {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
