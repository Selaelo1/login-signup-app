
const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check for missing fields
    if (!name || !email || !password) {
      res.status(400).json({ error: 'Missing required fields' });
    } else {
      // Email format validation using regex
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        res.status(400).json({ error: 'Invalid email format' });
      } else {
        // Password strength validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
          res.status(400).json({
            error: 'Password must be at least 8 characters, including uppercase, lowercase, numbers, and special characters',
          });
        } else {
          // Check for existing email
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            res.status(400).json({ error: 'Email already exists' });
          } else {
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const user = new User({ name, email, password: hashedPassword });
            await user.save();

            res.send('Signed up successfully');
          }
        }
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

