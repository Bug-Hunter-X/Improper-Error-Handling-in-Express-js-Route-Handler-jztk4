const express = require('express');
const app = express();
const logger = require('winston'); //Example logger

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Basic input validation, more robust validation might be needed
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  db.getUser(userId, (err, user) => {
    if (err) {
      logger.error('Database error:', err); //Log the error for debugging
      res.status(500).json({ error: 'Failed to retrieve user' });
    } else if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
});