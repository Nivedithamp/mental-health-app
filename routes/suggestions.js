const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation');

// GET /api/suggestions
router.get('/', async (req, res) => {
  const { context } = req.query;
  console.log('Context received:', context);

  try {
    const suggestion = await Conversation.findOne({ context: new RegExp(context, 'i') });
    console.log('Suggestion found:', suggestion);

    if (!suggestion) {
      console.log('No suggestion found');
      return res.status(404).json({ message: 'No suggestion found' });
    }

    res.json({ response: suggestion.response });
  } catch (error) {
    console.error('Error fetching suggestion:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
