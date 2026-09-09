const express = require('express');
const router = express.Router();
const db = require('../config/firebase');
const { validateUser } = require('../schema/userSchema');

// POST /api/users
router.post('/users', async (req, res) => {
  const validation = validateUser(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: validation.errors
    });
  }

  try {
    const { name, email, age, course } = req.body;
    const docRef = await db.collection('users').add({
      name,
      email,
      age,
      course,
      createdAt: new Date()
    });

    res.status(201).json({
      message: 'User stored successfully in Firestore',
      id: docRef.id
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to store user data in Firestore',
      error: error.message
    });
  }
});

module.exports = router;
