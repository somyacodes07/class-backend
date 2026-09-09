# assignment_9

**Name:** Somyajeet Singh

**Subject:** Backend Development

**Roll Number:** 150096725043

---

## Question 2: Update and Delete Users Using Express, MongoDB and Mongoose

### Folder Structure
```text
assignment_9/
├── package.json
├── server.js
├── schema/
│   └── userSchema.js
├── model/
│   └── userModel.js
├── router/
│   └── userRouter.js
└── README.md
```

---

## Steps to Run

1. Open a terminal in this folder (`assignment_9`).
2. Ensure MongoDB is running locally (default: `mongodb://127.0.0.1:27017/assignment9`).
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

Terminal output on successful connection:
```text
MongoDB connected successfully
Server is running on http://localhost:3000
```

---

## API Endpoints

### 1. Create User
- **Method:** `POST`
- **URL:** `http://localhost:3000/api/users`
- **Request Body:**
  ```json
  {
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 22,
    "course": "MCA"
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "message": "User created successfully",
    "user": {
      "_id": "65e6d2...",
      "name": "Rahul",
      "email": "rahul@gmail.com",
      "age": 22,
      "course": "MCA"
    }
  }
  ```

### 2. Retrieve All Users
- **Method:** `GET`
- **URL:** `http://localhost:3000/api/users`
- **Response (200 OK):**
  ```json
  [
    {
      "_id": "65e6d2...",
      "name": "Rahul",
      "email": "rahul@gmail.com",
      "age": 22,
      "course": "MCA"
    }
  ]
  ```

### 3. Update User
- **Method:** `PATCH`
- **URL:** `http://localhost:3000/api/users/:id`
- **Example URL:** `http://localhost:3000/api/users/65e6d2...`
- **Request Body:**
  ```json
  {
    "age": 23,
    "course": "MCA"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "message": "User updated successfully"
  }
  ```

### 4. Delete User
- **Method:** `DELETE`
- **URL:** `http://localhost:3000/api/users/:id`
- **Example URL:** `http://localhost:3000/api/users/65e6d2...`
- **Response (200 OK):**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

---

## Error Handling

- **Invalid MongoDB ID (400 Bad Request):**
  ```json
  {
    "message": "Invalid MongoDB ID"
  }
  ```
- **User Not Found (404 Not Found):**
  ```json
  {
    "message": "User not found"
  }
  ```
- **Database Error (500 Internal Server Error):**
  ```json
  {
    "message": "Database error",
    "error": "..."
  }
  ```
