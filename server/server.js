const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
import connectDB from './config/db.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

await connectDB();
// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend is working!',
    timestamp: new Date()
  });
});

// Routes
app.use('/api/cases', require('./routes/cases'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test API available at http://localhost:${PORT}/api/test`);
});