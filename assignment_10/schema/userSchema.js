function validateUser(data) {
  const errors = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
    errors.push('Name is required');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Valid email is required');
  }

  if (
    data.age === undefined ||
    data.age === null ||
    typeof data.age !== 'number' ||
    data.age <= 0 ||
    data.age > 120
  ) {
    errors.push('Age is required and must be a valid positive range (1-120)');
  }

  if (!data.course || typeof data.course !== 'string' || data.course.trim() === '') {
    errors.push('Course is required');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

module.exports = { validateUser };
