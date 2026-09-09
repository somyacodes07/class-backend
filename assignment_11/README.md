# assignment_11

**Name:** Somyajeet Singh

**Subject:** Backend Development

**Roll Number:** 150096725043

---

## Assignment: Teacher and Student Registration Using Express.js and MongoDB

### Folder Structure
```text
assignment_11/
├── package.json
├── server.js
├── schema/
│   ├── teacherSchema.js
│   └── studentSchema.js
├── model/
│   ├── teacherModel.js
│   └── studentModel.js
├── router/
│   ├── teacherRouter.js
│   └── studentRouter.js
└── README.md
```

---

## Steps to Run

1. Open a terminal in this folder (`assignment_11`).
2. Ensure MongoDB is running locally (default: `mongodb://127.0.0.1:27017/assignment11`).
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

Terminal output on start:
```text
MongoDB connected successfully
Server is running on http://localhost:3000
```

---

## API Endpoints

### 1. Teacher Registration
- **Method:** `POST`
- **URL:** `http://localhost:3000/teacher/register`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "name": "Dr. Sharma",
    "email": "sharma@example.com",
    "password": "Password@123",
    "subject": "Backend Development"
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "message": "Teacher registered successfully",
    "teacher": {
      "_id": "65e6d2...",
      "name": "Dr. Sharma",
      "email": "sharma@example.com",
      "subject": "Backend Development"
    }
  }
  ```

### 2. Student Registration
- **Method:** `POST`
- **URL:** `http://localhost:3000/student/register`
- **Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "name": "Rahul Kumar",
    "email": "rahul@example.com",
    "password": "StudentPass@123",
    "course": "MCA",
    "age": 22
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "message": "Student registered successfully",
    "student": {
      "_id": "65e6d2...",
      "name": "Rahul Kumar",
      "email": "rahul@example.com",
      "course": "MCA",
      "age": 22
    }
  }
  ```

---

## Security & Validation Notes
- Passwords are automatically hashed using **bcrypt** before being persisted in MongoDB.
- Validation checks verify that all required fields are present in the request body before processing.
- Duplicate email registrations are rejected with a 400 Bad Request error.
