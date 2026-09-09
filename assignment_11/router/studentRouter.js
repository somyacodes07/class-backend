const express = require('express');
const router = express.Router();
let bcrypt;
try {
  bcrypt = require('bcrypt');
} catch (e) {
  bcrypt = require('bcryptjs');
}
const Student = require('../model/studentModel');

// POST /student/register
router.post(['/register', '/student/register'], async (req, res) => {
  const { name, email, password, course, age } = req.body;

  // Validate registration data
  if (!name || !email || !password || !course || age === undefined || age === null) {
    return res.status(400).json({
      message: 'Validation error: name, email, password, course, and age are required'
    });
  }

  try {
    // Check if student already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student with this email already exists' });
    }

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save to Student collection
    const student = new Student({
      name,
      email,
      password: hashedPassword,
      course,
      age
    });
    await student.save();

    res.status(201).json({
      message: 'Student registered successfully',
      student: {
        _id: student._id,
        name: student.name,
        email: student.email,
        course: student.course,
        age: student.age
      }
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to register student',
      error: error.message
    });
  }
});

module.exports = router;
