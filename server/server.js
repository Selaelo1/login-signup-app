
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const confirmationRouter = require('./src/routes/api/confirmation,js');
const signupRouter = require('./src/routes/api/signup.js');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
});

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use API routers
app.use('/api', confirmationRouter);
app.use('/api', signupRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof mongoose.Error) {
    res.status(500).json({ error: 'MongoDB connection error' });
  } else {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


