const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import the User model

// Route to handle form submission
router.post('/submit', async (req, res) => {
  const { firstName } = req.body;

  try {
    // Update the user table with the provided first name
    await User.updateOne({}, { firstName: firstName });
    res.status(200).send('User updated successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating user.');
  }
});

module.exports = router;
