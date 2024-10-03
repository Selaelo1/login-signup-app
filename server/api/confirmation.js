const express = require('express');
const router = express.Router();

router.get('/confirmation', (req, res) => {
  res.send('Confirmation page');
});

module.exports = router;
