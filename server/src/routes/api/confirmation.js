


const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Verify email
router.get('/verify-email/:token', async (req, res) => {
  const token = req.params.token;
  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.verified = true;
  user.verificationToken = null;
  await user.save();

  res.json({ message: 'Email verified successfully' });
});

// Password reset
router.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.json({ message: 'Password reset successfully' });
});

module.exports = router;



