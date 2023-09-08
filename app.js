const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 9000;

// MongoDB connection (replace with your MongoDB connection string)
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Hi, Pleasure to meet ya as well!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
