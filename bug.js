const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Sending a generic error message is bad practice. 
      // Should provide more details for debugging
      res.status(500).send('Error');
    } else {
      res.json(user);
    }
  });
});