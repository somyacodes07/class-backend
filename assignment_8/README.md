# assignment_8

**Name:** Somyajeet Singh

**Subject:** Backend Development

**Roll Number:** 150096725043

---

## Question 1: Create and Retrieve Users Using Express, MongoDB and Mongoose

### Folder Structure
```text
assignment_8/
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

1. Open a terminal in this folder (`assignment_8`).
2. Ensure MongoDB is running locally (default: `mongodb://127.0.0.1:27017/assignment8`).
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

Upon successful connection, the terminal displays:
```text
MongoDB connected successfully
Server is running on http://localhost:3000
```

---

## API Endpoints

### 1. Create User
- **Method:** `POST`
- **URL:** `http://localhost:3000/api/users`
- **Headers:** `Content-Type: application/json`
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
      "course": "MCA",
      "__v": 0
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
      "course": "MCA",
      "__v": 0
    }
  ]
  ```
