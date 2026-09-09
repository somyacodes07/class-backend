const express = require('express');
const router = express.Router();
let bcrypt;
try {
  bcrypt = require('bcrypt');
} catch (e) {
  bcrypt = require('bcryptjs');
}
const Teacher = require('../model/teacherModel');

// POST /teacher/register
router.post(['/register', '/teacher/register'], async (req, res) => {
  const { name, email, password, subject } = req.body;

  // Validate registration data
  if (!name || !email || !password || !subject) {
    return res.status(400).json({
      message: 'Validation error: name, email, password, and subject are required'
    });
  }

  try {
    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher with this email already exists' });
    }

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save to Teacher collection
    const teacher = new Teacher({
      name,
      email,
      password: hashedPassword,
      subject
    });
    await teacher.save();

    res.status(201).json({
      message: 'Teacher registered successfully',
      teacher: {
        _id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        subject: teacher.subject
      }
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to register teacher',
      error: error.message
    });
  }
});

module.exports = router;
