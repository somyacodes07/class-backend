const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../model/userModel');

// POST /api/users - Create User
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
      message: 'User created successfully',
      user
    });
  } catch (error) {
    res.status(400).json({ message: 'Invalid request data', error: error.message });
  }
});

// GET /api/users - Retrieve Users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Database error', error: error.message });
  }
});

// PATCH /api/users/:id - Update User
router.patch('/users/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid MongoDB ID' });
  }

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: 'Invalid request data' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      message: 'User updated successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Database error', error: error.message });
  }
});

// DELETE /api/users/:id - Delete User
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid MongoDB ID' });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Database error', error: error.message });
  }
});

module.exports = router;
