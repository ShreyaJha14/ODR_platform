const express = require('express');
const router = express.Router();
const Case = require('../models/Case');

// Get all cases
router.get('/', async (req, res) => {
  try {
    const cases = await Case.find();
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get cases by status
router.get('/status/:status', async (req, res) => {
  try {
    const cases = await Case.find({ status: req.params.status });
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Submit new case
router.post('/', async (req, res) => {
  const newCase = new Case({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    plaintiff: req.body.plaintiff
  });

  try {
    const savedCase = await newCase.save();
    res.status(201).json(savedCase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update case status
router.patch('/:id/status', async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedCase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;